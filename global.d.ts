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