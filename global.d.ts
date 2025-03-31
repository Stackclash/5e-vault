/**
 * @public
 */
export interface DataWriteOptions {
    /**
     * Time of creation, represented as a unix timestamp, in milliseconds.
     * Omit this if you want to keep the default behaviour.
     * @public
     * */
    ctime?: number;
    /**
     * Time of last modification, represented as a unix timestamp, in milliseconds.
     * Omit this if you want to keep the default behaviour.
     * @public
     */
    mtime?: number;

}

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
 * @public
 */
export interface ListedFiles {
    /** @public */
    files: string[];
    /** @public */
    folders: string[];
}

/**
 * Work directly with files and folders inside a vault.
 * If possible prefer using the {@link Vault} API over this.
 * @public
 */
export interface DataAdapter {

    /**
     * @public
     */
    getName(): string;

    /**
     * Check if something exists at the given path. For a faster way to synchronously check
     * if a note or attachment is in the vault, use {@link Vault.getAbstractFileByPath}.
     * @param normalizedPath - path to file/folder, use {@link normalizePath} to normalize beforehand.
     * @param sensitive - Some file systems/operating systems are case-insensitive, set to true to force a case-sensitivity check.
     * @public
     */
    exists(normalizedPath: string, sensitive?: boolean): Promise<boolean>;
    /**
     * Retrieve a list of all files and folders inside the given folder, non-recursive.
     * @param normalizedPath - path to folder, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    list(normalizedPath: string): Promise<ListedFiles>;
    /**
     * @param normalizedPath - path to file, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    read(normalizedPath: string): Promise<string>;
    /**
     * @param normalizedPath - path to file, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    readBinary(normalizedPath: string): Promise<ArrayBuffer>;
    /**
     * Returns an URI for the browser engine to use, for example to embed an image.
     * @param normalizedPath - path to file/folder, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    getResourcePath(normalizedPath: string): string;
    /**
     * Create a directory.
     * @param normalizedPath - path to use for new folder, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    mkdir(normalizedPath: string): Promise<void>;
    /**
     * Try moving to system trash.
     * @param normalizedPath - path to file/folder, use {@link normalizePath} to normalize beforehand.
     * @returns Returns true if succeeded. This can fail due to system trash being disabled.
     * @public
     */
    trashSystem(normalizedPath: string): Promise<boolean>;
    /**
     * Move to local trash.
     * Files will be moved into the `.trash` folder at the root of the vault.
     * @param normalizedPath - path to file/folder, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    trashLocal(normalizedPath: string): Promise<void>;
    /**
     * Remove a directory.
     * @param normalizedPath - path to folder, use {@link normalizePath} to normalize beforehand.
     * @param recursive - If `true`, delete folders under this folder recursively, if `false` the folder needs to be empty.
     * @public
     */
    rmdir(normalizedPath: string, recursive: boolean): Promise<void>;
    /**
     * Delete a file.
     * @param normalizedPath - path to file, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    remove(normalizedPath: string): Promise<void>;

    /**
     * Rename a file or folder.
     * @param normalizedPath - current path to file/folder, use {@link normalizePath} to normalize beforehand.
     * @param normalizedNewPath - new path to file/folder, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    rename(normalizedPath: string, normalizedNewPath: string): Promise<void>;
    /**
     * Create a copy of a file.
     * This will fail if there is already a file at `normalizedNewPath`.
     * @param normalizedPath - path to file, use {@link normalizePath} to normalize beforehand.
     * @param normalizedNewPath - path to file, use {@link normalizePath} to normalize beforehand.
     * @public
     */
    copy(normalizedPath: string, normalizedNewPath: string): Promise<void>;
}

/**
 * Work with files and folders stored inside a vault.
 * @see {@link https://docs.obsidian.md/Plugins/Vault}
 * @public
 */
export class Vault {
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
}

/**
 * @public
 */
export interface FileStats {
    /**
     * Time of creation, represented as a unix timestamp, in milliseconds.
     * @public
     */
    ctime: number;
    /**
     * Time of last modification, represented as a unix timestamp, in milliseconds.
     * @public
     */
    mtime: number;
    /**
     * Size on disk, as bytes.
     * @public
     */
    size: number;
}

/**
 * @public
 */
export class TFolder extends TAbstractFile {
    /**
     * @public
     */
    children: TAbstractFile[];

    /**
     * @public
     */
    isRoot(): boolean;

}

/**
 * This can be either a `TFile` or a `TFolder`.
 * @public
 */
export abstract class TAbstractFile {
    /**
     * @public
     */
    vault: Vault;
    /**
     * @public
     */
    path: string;
    /**
     * @public
     */
    name: string;
    /**
     * @public
     */
    parent: TFolder | null;

}

/**
 * @public
 */
export class TFile extends TAbstractFile {
    /**
     * @public
     */
    stat: FileStats;
    /**
     * @public
     */
    basename: string;
    /**
     * @public
     */
    extension: string;

}

/**
 * @public
 */
export class Workspace {
    /** @public */
    /**
     * Returns the file for the current view if it's a `FileView`.
     * Otherwise, it will return the most recently active file.
     * @public
     */
    getActiveFile(): TFile | null;
}

/**
 * @public
 */
export class App {
    /** @public */
    workspace: Workspace;

    /** @public */
    vault: Vault;

    /** @public */
    fileManager: FileManager;
}

type Require = (path: string) => any

type Import = (path: string) => Promise<any>

export class Self {
    require: Require & { import: Import }
}

declare global {

    var app: App;
}