/**
 * Manage the creation, deletion and renaming of files from the UI.
 * @public
 */
export class FileManager {

    /**
     * Gets the folder that new files should be saved to, given the user's preferences.
     * @param sourcePath - The path to the current open/focused file,
     * used when the user wants new files to be created 'in the same folder'.
     * Use an empty string if there is no active file.
     * @param newFilePath - The path to the file that will be newly created,
     * used to infer what settings to use based on the path's extension.
     * @public
     */
    getNewFileParent(sourcePath: string, newFilePath?: string): TFolder;

    /**
     * Rename or move a file safely, and update all links to it depending on the user's preferences.
     * @param file - the file to rename
     * @param newPath - the new path for the file
     * @public
     */
    renameFile(file: TAbstractFile, newPath: string): Promise<void>;

    /**
     * Remove a file or a folder from the vault according the user's preferred 'trash'
     * options (either moving the file to .trash/ or the OS trash bin).
     * @param file
     * @public
     */
    trashFile(file: TAbstractFile): Promise<void>;

    /**
     * Generate a Markdown link based on the user's preferences.
     * @param file - the file to link to.
     * @param sourcePath - where the link is stored in, used to compute relative links.
     * @param subpath - A subpath, starting with `#`, used for linking to headings or blocks.
     * @param alias - The display text if it's to be different than the file name. Pass empty string to use file name.
     * @public
     */
    generateMarkdownLink(file: TFile, sourcePath: string, subpath?: string, alias?: string): string;

    /**
     * Atomically read, modify, and save the frontmatter of a note.
     * The frontmatter is passed in as a JS object, and should be mutated directly to achieve the desired result.
     *
     * Remember to handle errors thrown by this method.
     *
     * @param file - the file to be modified. Must be a Markdown file.
     * @param fn - a callback function which mutates the frontmatter object synchronously.
     * @param options - write options.
     * @throws YAMLParseError if the YAML parsing fails
     * @throws any errors that your callback function throws
     * @example
     * ```ts
     * app.fileManager.processFrontMatter(file, (frontmatter) => {
     *     frontmatter['key1'] = value;
     *     delete frontmatter['key2'];
     * });
     * ```
     * @public
     */
    processFrontMatter(file: TFile, fn: (frontmatter: any) => void, options?: DataWriteOptions): Promise<void>;

    /**
     * Resolves a unique path for the attachment file being saved.
     * Ensures that the parent directory exists and dedupes the
     * filename if the destination filename already exists.
     *
     * @param filename Name of the attachment being saved
     * @param sourcePath The path to the note associated with this attachment, defaults to the workspace's active file.
     * @returns Full path for where the attachment should be saved, according to the user's settings
     * @public
     */
    getAvailablePathForAttachment(filename: string, sourcePath?: string): Promise<string>;
}

/**
 *
 * Linktext is any internal link that is composed of a path and a subpath, such as 'My note#Heading'
 * Linkpath (or path) is the path part of a linktext
 * Subpath is the heading/block ID part of a linktext.
 *
 * @public
 */
export class MetadataCache extends Events {

    /**
     * Get the best match for a linkpath.
     * @public
     */
    getFirstLinkpathDest(linkpath: string, sourcePath: string): TFile | null;

    /**
     * @public
     */
    getFileCache(file: TFile): CachedMetadata | null;
    /**
     * @public
     */
    getCache(path: string): CachedMetadata | null;

    /**
     * Generates a linktext for a file.
     *
     * If file name is unique, use the filename.
     * If not unique, use full path.
     * @public
     */
    fileToLinktext(file: TFile, sourcePath: string, omitMdExtension?: boolean): string;

    /**
     * Contains all resolved links. This object maps each source file's path to an object of destination file paths with the link count.
     * Source and destination paths are all vault absolute paths that comes from `TFile.path` and can be used with `Vault.getAbstractFileByPath(path)`.
     * @public
     */
    resolvedLinks: Record<string, Record<string, number>>;
    /**
     * Contains all unresolved links. This object maps each source file to an object of unknown destinations with count.
     * Source paths are all vault absolute paths, similar to `resolvedLinks`.
     * @public
     */
    unresolvedLinks: Record<string, Record<string, number>>;

    /**
     * Called when a file has been indexed, and its (updated) cache is now available.
     *
     * Note: This is not called when a file is renamed for performance reasons.
     * You must hook the vault rename event for those.
     * @public
     */
    on(name: 'changed', callback: (file: TFile, data: string, cache: CachedMetadata) => any, ctx?: any): EventRef;
    /**
     * Called when a file has been deleted. A best-effort previous version of the cached metadata is presented,
     * but it could be null in case the file was not successfully cached previously.
     * @public
     */
    on(name: 'deleted', callback: (file: TFile, prevCache: CachedMetadata | null) => any, ctx?: any): EventRef;

    /**
     * Called when a file has been resolved for `resolvedLinks` and `unresolvedLinks`.
     * This happens sometimes after a file has been indexed.
     * @public
     */
    on(name: 'resolve', callback: (file: TFile) => any, ctx?: any): EventRef;
    /**
     * Called when all files has been resolved. This will be fired each time files get modified after the initial load.
     * @public
     */
    on(name: 'resolved', callback: () => any, ctx?: any): EventRef;
}

/**
 * Work with files and folders stored inside a vault.
 * @see {@link https://docs.obsidian.md/Plugins/Vault}
 * @public
 */
export class Vault extends Events {
    /**
     * @public
     */
    adapter: DataAdapter;

    /**
     * Gets the path to the config folder.
     * This value is typically `.obsidian` but it could be different.
     * @public
     */
    configDir: string;

    /**
     * Gets the name of the vault.
     * @public
     */
    getName(): string;

    /**
     * Get a file inside the vault at the given path.
     * Returns `null` if the file does not exist.
     *
     * @param path
     * @public
     */
    getFileByPath(path: string): TFile | null;
    /**
     * Get a folder inside the vault at the given path.
     * Returns `null` if the folder does not exist.
     *
     * @param path
     * @public
     */
    getFolderByPath(path: string): TFolder | null;
    /**
     * Get a file or folder inside the vault at the given path. To check if the return type is
     * a file, use `instanceof TFile`. To check if it is a folder, use `instanceof TFolder`.
     * @param path - vault absolute path to the folder or file, with extension, case sensitive.
     * @returns the abstract file, if it's found.
     * @public
     */
    getAbstractFileByPath(path: string): TAbstractFile | null;

    /**
     * Get the root folder of the current vault.
     * @public
     */
    getRoot(): TFolder;

    /**
     * Create a new plaintext file inside the vault.
     * @param path - Vault absolute path for the new file, with extension.
     * @param data - text content for the new file.
     * @param options - (Optional)
     * @public
     */
    create(path: string, data: string, options?: DataWriteOptions): Promise<TFile>;
    /**
     * Create a new binary file inside the vault.
     * @param path - Vault absolute path for the new file, with extension.
     * @param data - content for the new file.
     * @param options - (Optional)
     * @throws Error if file already exists
     * @public
     */
    createBinary(path: string, data: ArrayBuffer, options?: DataWriteOptions): Promise<TFile>;
    /**
     * Create a new folder inside the vault.
     * @param path - Vault absolute path for the new folder.
     * @throws Error if folder already exists
     * @public
     */
    createFolder(path: string): Promise<TFolder>;
    /**
     * Read a plaintext file that is stored inside the vault, directly from disk.
     * Use this if you intend to modify the file content afterwards.
     * Use {@link Vault.cachedRead} otherwise for better performance.
     * @public
     */
    read(file: TFile): Promise<string>;
    /**
     * Read the content of a plaintext file stored inside the vault
     * Use this if you only want to display the content to the user.
     * If you want to modify the file content afterward use {@link Vault.read}
     * @public
     */
    cachedRead(file: TFile): Promise<string>;
    /**
     * Read the content of a binary file stored inside the vault.
     * @public
     */
    readBinary(file: TFile): Promise<ArrayBuffer>;

    /**
     * Returns an URI for the browser engine to use, for example to embed an image.
     * @public
     */
    getResourcePath(file: TFile): string;
    /**
     * Deletes the file completely.
     * @param file - The file or folder to be deleted
     * @param force - Should attempt to delete folder even if it has hidden children
     * @public
     */
    delete(file: TAbstractFile, force?: boolean): Promise<void>;
    /**
     * Tries to move to system trash. If that isn't successful/allowed, use local trash
     * @param file - The file or folder to be deleted
     * @param system - Set to `false` to use local trash by default.
     * @public
     */
    trash(file: TAbstractFile, system: boolean): Promise<void>;
    /**
     * Rename or move a file. To ensure links are automatically renamed,
     * use {@link FileManager.renameFile} instead.
     * @param file - the file to rename/move
     * @param newPath - vault absolute path to move file to.
     * @public
     */
    rename(file: TAbstractFile, newPath: string): Promise<void>;
    /**
     * Modify the contents of a plaintext file.
     * @param file - The file
     * @param data - The new file content
     * @param options - (Optional)
     * @public
     */
    modify(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;
    /**
     * Modify the contents of a binary file.
     * @param file - The file
     * @param data - The new file content
     * @param options - (Optional)
     * @public
     */
    modifyBinary(file: TFile, data: ArrayBuffer, options?: DataWriteOptions): Promise<void>;
    /**
     * Add text to the end of a plaintext file inside the vault.
     * @param file - The file
     * @param data - the text to add
     * @param options - (Optional)
     * @public
     */
    append(file: TFile, data: string, options?: DataWriteOptions): Promise<void>;
    /**
     * Atomically read, modify, and save the contents of a note.
     * @param file - the file to be read and modified.
     * @param fn - a callback function which returns the new content of the note synchronously.
     * @param options - write options.
     * @returns string - the text value of the note that was written.
     * @example
     * ```ts
     * app.vault.process(file, (data) => {
     *  return data.replace('Hello', 'World');
     * });
     * ```
     * @public
     */
    process(file: TFile, fn: (data: string) => string, options?: DataWriteOptions): Promise<string>;
    /**
     * Create a copy of a file or folder.
     * @param file - The file or folder.
     * @param newPath - Vault absolute path for the new copy.
     * @public
     */
    copy<T extends TAbstractFile>(file: T, newPath: string): Promise<T>;
    /**
     * Get all files and folders in the vault.
     * @public
     */
    getAllLoadedFiles(): TAbstractFile[];
    /**
     * Get all folders in the vault.
     * @param includeRoot - Should the root folder (`/`) be returned
     * @public
     */
    getAllFolders(includeRoot?: boolean): TFolder[];

    /**
     * @public
     */
    static recurseChildren(root: TFolder, cb: (file: TAbstractFile) => any): void;
    /**
     * Get all Markdown files in the vault.
     * @public
     */
    getMarkdownFiles(): TFile[];
    /**
     * Get all files in the vault.
     * @public
     */
    getFiles(): TFile[];

    /**
     * Called when a file is created.
     * This is also called when the vault is first loaded for each existing file
     * If you do not wish to receive create events on vault load, register your event handler inside {@link Workspace.onLayoutReady}.
     * @public
     */
    on(name: 'create', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
    /**
     * Called when a file is modified.
     * @public
     */
    on(name: 'modify', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
    /**
     * Called when a file is deleted.
     * @public
     */
    on(name: 'delete', callback: (file: TAbstractFile) => any, ctx?: any): EventRef;
    /**
     * Called when a file is renamed.
     * @public
     */
    on(name: 'rename', callback: (file: TAbstractFile, oldPath: string) => any, ctx?: any): EventRef;

}

/**
 * @public
 */
export class Workspace extends Events {

    /**
     * @public
     */
    leftSplit: WorkspaceSidedock | WorkspaceMobileDrawer;
    /**
     * @public
     */
    rightSplit: WorkspaceSidedock | WorkspaceMobileDrawer;
    /**
     * @public
     */
    leftRibbon: WorkspaceRibbon;
    /**
     * @public
     * @deprecated No longer used
     */
    rightRibbon: WorkspaceRibbon;
    /**
     * @public
     */
    rootSplit: WorkspaceRoot;

    /**
     * Indicates the currently focused leaf, if one exists.
     *
     * Please avoid using `activeLeaf` directly, especially without checking whether
     * `activeLeaf` is null.
     *
     * @public
     * @deprecated The use of this field is discouraged.
     * The recommended alternatives are:
     * - If you need information about the current view, use {@link Workspace.getActiveViewOfType}.
     * - If you need to open a new file or navigate a view, use {@link Workspace.getLeaf}.
     */
    activeLeaf: WorkspaceLeaf | null;

    /**
     *
     * @public
     */
    containerEl: HTMLElement;
    /**
     * If the layout of the app has been successfully initialized.
     * To react to the layout becoming ready, use {@link Workspace.onLayoutReady}
     * @public
     */
    layoutReady: boolean;
    /**
     * Save the state of the current workspace layout.
     * @public
     */
    requestSaveLayout: Debouncer<[], Promise<void>>;

    /**
     * A component managing the current editor.
     * This can be null if the active view has no editor.
     * @public
     */
    activeEditor: MarkdownFileInfo | null;

    /**
     * Runs the callback function right away if layout is already ready,
     * or push it to a queue to be called later when layout is ready.
     * @public
     * */
    onLayoutReady(callback: () => any): void;
    /**
     * @public
     */
    changeLayout(workspace: any): Promise<void>;

    /**
     * @public
     */
    getLayout(): Record<string, unknown>;

    /**
     * @public
     */
    createLeafInParent(parent: WorkspaceSplit, index: number): WorkspaceLeaf;

    /**
     * @public
     */
    createLeafBySplit(leaf: WorkspaceLeaf, direction?: SplitDirection, before?: boolean): WorkspaceLeaf;
    /**
     * @public
     * @deprecated - You should use {@link Workspace.getLeaf|getLeaf(true)} instead which does the same thing.
     */
    splitActiveLeaf(direction?: SplitDirection): WorkspaceLeaf;

    /**
     * @public
     * @deprecated - Use the new form of this method instead
     */
    duplicateLeaf(leaf: WorkspaceLeaf, direction?: SplitDirection): Promise<WorkspaceLeaf>;
    /**
     * @public
     */
    duplicateLeaf(leaf: WorkspaceLeaf, leafType: PaneType | boolean, direction?: SplitDirection): Promise<WorkspaceLeaf>;
    /**
     * @public
     * @deprecated - You should use {@link Workspace.getLeaf|getLeaf(false)} instead which does the same thing.
     */
    getUnpinnedLeaf(): WorkspaceLeaf;
    /**
     * Creates a new leaf in a leaf adjacent to the currently active leaf.
     * If direction is `'vertical'`, the leaf will appear to the right.
     * If direction is `'horizontal'`, the leaf will appear below the current leaf.
     *
     * @public
     */
    getLeaf(newLeaf?: 'split', direction?: SplitDirection): WorkspaceLeaf;
    /**
     * If newLeaf is false (or not set) then an existing leaf which can be navigated
     * is returned, or a new leaf will be created if there was no leaf available.
     *
     * If newLeaf is `'tab'` or `true` then a new leaf will be created in the preferred
     * location within the root split and returned.
     *
     * If newLeaf is `'split'` then a new leaf will be created adjacent to the currently active leaf.
     *
     * If newLeaf is `'window'` then a popout window will be created with a new leaf inside.
     *
     * @public
     */
    getLeaf(newLeaf?: PaneType | boolean): WorkspaceLeaf;

    /**
     * Migrates this leaf to a new popout window.
     * Only works on the desktop app.
     * @public
     * @throws Error if the app does not support popout windows (i.e. on mobile or if Electron version is too old)
     */
    moveLeafToPopout(leaf: WorkspaceLeaf, data?: WorkspaceWindowInitData): WorkspaceWindow;

    /**
     * Open a new popout window with a single new leaf and return that leaf.
     * Only works on the desktop app.
     * @public
     */
    openPopoutLeaf(data?: WorkspaceWindowInitData): WorkspaceLeaf;
    /**
     * @public
     */
    openLinkText(linktext: string, sourcePath: string, newLeaf?: PaneType | boolean, openViewState?: OpenViewState): Promise<void>;
    /**
     * Sets the active leaf
     * @param leaf - The new active leaf
     * @param params - Parameter object of whether to set the focus.
     * @public
     */
    setActiveLeaf(leaf: WorkspaceLeaf, params?: {
        /** @public */
        focus?: boolean;
    }): void;
    /**
     * @deprecated - function signature changed. Use other form instead
     * @public
     */
    setActiveLeaf(leaf: WorkspaceLeaf, pushHistory: boolean, focus: boolean): void;

    /**
     * Retrieve a leaf by its id.
     * @param id id of the leaf to retrieve.
     * @public
     */
    getLeafById(id: string): WorkspaceLeaf | null;
    /**
     * Get all leaves that belong to a group
     * @param group id
     * @public
     */
    getGroupLeaves(group: string): WorkspaceLeaf[];

    /**
     * Get the most recently active leaf in a given workspace root. Useful for interacting with the leaf in the root split while a sidebar leaf might be active.
     * @param root Root for the leaves you want to search. If a root is not provided, the `rootSplit` and leaves within pop-outs will be searched.
     * @public
     */
    getMostRecentLeaf(root?: WorkspaceParent): WorkspaceLeaf | null;
    /**
     * Create a new leaf inside the left sidebar.
     * @param split Should the existing split be split up?
     * @public
     */
    getLeftLeaf(split: boolean): WorkspaceLeaf | null;
    /**
     * Create a new leaf inside the right sidebar.
     * @param split Should the existing split be split up?
     * @public
     */
    getRightLeaf(split: boolean): WorkspaceLeaf | null;
    /**
     * Get side leaf or create one if one does not exist.
     * @public
     */
    ensureSideLeaf(type: string, side: Side, options?: {
        /** @public */
        active?: boolean;
        /** @public */
        split?: boolean;
        /** @public */
        reveal?: boolean;
        /** @public */
        state?: any;
    }): Promise<WorkspaceLeaf>;

    /**
     * Get the currently active view of a given type.
     * @public
     */
    getActiveViewOfType<T extends View>(type: Constructor<T>): T | null;

    /**
     * Returns the file for the current view if it's a `FileView`.
     * Otherwise, it will return the most recently active file.
     * @public
     */
    getActiveFile(): TFile | null;

    /**
     * Iterate through all leaves in the main area of the workspace.
     * @public
     */
    iterateRootLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
    /**
     * Iterate through all leaves, including main area leaves, floating leaves, and sidebar leaves.
     * @public
     */
    iterateAllLeaves(callback: (leaf: WorkspaceLeaf) => any): void;
    /**
     * Get all leaves of a given type.
     * @public
     */
    getLeavesOfType(viewType: string): WorkspaceLeaf[];
    /**
     * Remove all leaves of the given type.
     * @public
     */
    detachLeavesOfType(viewType: string): void;

    /**
     * Bring a given leaf to the foreground. If the leaf is in a sidebar, the sidebar will be uncollapsed.
     * `await` this function to ensure your view has been fully loaded and is not deferred.
     * @public
     */
    revealLeaf(leaf: WorkspaceLeaf): Promise<void>;
    /**
     * Get the filenames of the 10 most recently opened files.
     * @public
     */
    getLastOpenFiles(): string[];

    /**
     * Calling this function will update/reconfigure the options of all Markdown views.
     * It is fairly expensive, so it should not be called frequently.
     * @public
     */
    updateOptions(): void;

    /**
     * Triggered when the active Markdown file is modified. React to file changes before they
     * are saved to disk.
     * @public
     */
    on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
    /**
     * Triggered when a `WorkspaceItem` is resized or the workspace layout has changed.
     * @public
     */
    on(name: 'resize', callback: () => any, ctx?: any): EventRef;

    /**
     * Triggered when the active leaf changes.
     * @public
     */
    on(name: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;
    /**
     * Triggered when the active file changes. The file could be in a new leaf, an existing leaf,
     * or an embed.
     * @public
     */
    on(name: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;

    /**
     * @public
     */
    on(name: 'layout-change', callback: () => any, ctx?: any): EventRef;
    /**
     * Triggered when a new popout window is created.
     * @public
     */
    on(name: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
    /**
     * Triggered when a popout window is closed.
     * @public
     */
    on(name: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
    /**
     * Triggered when the CSS of the app has changed.
     * @public
     */
    on(name: 'css-change', callback: () => any, ctx?: any): EventRef;

    /**
     * Triggered when the user opens the context menu on a file.
     * @public
     */
    on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
    /**
     * Triggered when the user opens the context menu with multiple files selected in the File Explorer.
     * @public
     */
    on(name: 'files-menu', callback: (menu: Menu, files: TAbstractFile[], source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;

    /**
     * Triggered when the user opens the context menu on an external URL.
     * @public
     */
    on(name: 'url-menu', callback: (menu: Menu, url: string) => any, ctx?: any): EventRef;
    /**
     * Triggered when the user opens the context menu on an editor.
     * @public
     */
    on(name: 'editor-menu', callback: (menu: Menu, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
    /**
     * Triggered when changes to an editor has been applied, either programmatically or from a user event.
     * @public
     */
    on(name: 'editor-change', callback: (editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;

    /**
     * Triggered when the editor receives a paste event.
     * Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
     * Use `evt.preventDefault()` to indicate that you've handled the event.
     * @public
     */
    on(name: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
    /**
     * Triggered when the editor receives a drop event.
     * Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
     * Use `evt.preventDefault()` to indicate that you've handled the event.
     * @public
     */
    on(name: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;

    /**
     * Triggered when the app is about to quit.
     * Not guaranteed to actually run.
     * Perform some best effort cleanup here.
     * @public
     */
    on(name: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;

}

/**
 * A scope receives keyboard events and binds callbacks to given hotkeys.
 * Only one scope is active at a time, but scopes may define parent scopes (in the constructor) and inherit their hotkeys.
 * @public
 */
export class Scope {

    /**
     * @public
     */
    constructor(parent?: Scope);
    /**
     * Add a keymap event handler to this scope.
     * @param modifiers - `Mod`, `Ctrl`, `Meta`, `Shift`, or `Alt`. `Mod` translates to `Meta` on macOS and `Ctrl` otherwise. Pass `null` to capture all events matching the `key`, regardless of modifiers.
     * @param key - Keycode from https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key%5FValues
     * @param func - the callback that will be called when a user triggers the keybind.
     * @public
     */
    register(modifiers: Modifier[] | null, key: string | null, func: KeymapEventListener): KeymapEventHandler;
    /**
     * Remove an existing keymap event handler.
     * @public
     */
    unregister(handler: KeymapEventHandler): void;

}

/**
 * Manages keymap lifecycle for different {@link Scope}s.
 *
 * @public
 */
export class Keymap {

    /**
     * Push a scope onto the scope stack, setting it as the active scope to handle all key events.
     * @public
     */
    pushScope(scope: Scope): void;
    /**
     * Remove a scope from the scope stack.
     * If the given scope is active, the next scope in the stack will be made active.
     * @public
     */
    popScope(scope: Scope): void;

    /**
     * Checks whether the modifier key is pressed during this event.
     * @public
     */
    static isModifier(evt: MouseEvent | TouchEvent | KeyboardEvent, modifier: Modifier): boolean;

    /**
     * Translates an event into the type of pane that should open.
     * Returns 'tab' if the modifier key Cmd/Ctrl is pressed OR if this is a middle-click MouseEvent.
     * Returns 'split' if Cmd/Ctrl+Alt is pressed.
     * Returns 'window' if Cmd/Ctrl+Alt+Shift is pressed.
     * @public
     * */
    static isModEvent(evt?: UserEvent | null): PaneType | boolean;
}

/**
 * @public
 */
export class App {

    /** @public */
    keymap: Keymap;
    /** @public */
    scope: Scope;

    /** @public */
    workspace: Workspace;

    /** @public */
    vault: Vault;
    /** @public */
    metadataCache: MetadataCache;

    /** @public */
    fileManager: FileManager;

    /**
     * The last known user interaction event, to help commands find out what modifier keys are pressed.
     * @public
     */
    lastEvent: UserEvent | null;

    /**
     * Retrieve value from `localStorage` for this vault.
     * @param key
     * @public
     */
    loadLocalStorage(key: string): any | null;
    /**
     * Save vault-specific value to `localStorage`. If data is `null`, the entry will be cleared.
     * @param key
     * @param data value being saved to localStorage. Must be serializable.
     * @public
     */
    saveLocalStorage(key: string, data: unknown | null): void;

}