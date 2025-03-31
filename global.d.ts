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