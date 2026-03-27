# Plugins

The vault uses **38 community plugins** along with Obsidian's built-in core plugins. This page documents each plugin and its role in the vault.

## Automation & Scripting

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Templater](https://silentvoid13.github.io/Templater/) | Template engine with JavaScript support | Powers all vault templates — note creation, form handling, file management |
| [Meta Bind](https://www.moritzjung.dev/obsidian-meta-bind-plugin-docs/) | Bind frontmatter to UI elements | Interactive buttons for array manipulation, shop inventory generation |
| [Modal Forms](https://github.com/danielo515/obsidian-modal-form) | Form dialogs for data collection | Used by templates to collect structured input from the user |
| [JS Engine](https://www.moritzjung.dev/obsidian-js-engine-plugin-docs/) | Run JavaScript in notes | Executes inline scripts and code blocks |
| [Modules](https://github.com/polyipseity/obsidian-modules) | Module system for scripts | Enables `import`/`export` between vault JavaScript files |
| [Text Generator](https://github.com/nhaouari/obsidian-textgenerator-plugin) | AI-powered text generation | Integrates with Ollama for AI-assisted content creation |
| [Execute Code](https://github.com/twibiral/obsidian-execute-code) | Run code blocks in notes | Executes code snippets directly within notes |

## Data & Queries

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) | Query engine for vault metadata | Core data layer — queries NPCs, locations, sessions, items across the vault |
| [Datacore](https://github.com/blacksmithgu/datacore) | Next-gen data engine with React | Provides React-based filterable tables (FilterTable.tsx) |

## D&D Specific

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Fantasy Statblocks](https://plugins.javalent.com/statblocks) | D&D monster stat blocks | Renders formatted 5e stat blocks for monsters and NPCs |
| [Initiative Tracker](https://plugins.javalent.com/it) | Combat initiative management | Tracks turn order during combat encounters |
| [Dice Roller](https://plugins.javalent.com/Dice+Roller/Dice+Roller) | Inline dice rolling | Roll dice directly in notes with notation like `dice: 2d6+3` |
| [Fantasy Content Generator](https://github.com/Gregory-Jagermeister/Fantasy-Content-Generator) | Random fantasy content | Generates random names, taverns, quests, and other D&D content |
| [DnD UI Toolkit](https://github.com/hay-kot/obsidian-dnd-ui-toolkit) | D&D-themed UI components | Provides styled D&D interface elements |

## Visualization & Maps

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Leaflet](https://plugins.javalent.com/Leaflet) | Interactive maps | Renders world maps with markers for locations, supports custom map images |
| [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin) | Drawing and diagramming | Visual diagrams, relationship maps, dungeon layouts |
| [Carousel](https://github.com/xhuajin/obsidian-carousel) | Image carousel | Image galleries in notes (NPC portraits, location images) |
| [Image Toolkit](https://github.com/sissilab/obsidian-image-toolkit) | Enhanced image viewing | Zoom, pan, and rotate images in notes |
| [Media Extended](https://github.com/aidenlx/media-extended) | Enhanced media playback | Powers the Sound Board template for background music |

## Calendar & Timeline

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Calendarium](https://plugins.javalent.com/calendarium) | Custom fantasy calendars | Manages in-game calendars with custom months, seasons, and holidays |
| [April's Automatic Timelines](https://github.com/April-Gras/obsidian-auto-timelines) | Auto-generated timelines | Creates visual timelines from dated events in the vault |

## Organization & Navigation

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Kanban](https://github.com/mgmeyers/obsidian-kanban) | Kanban boards | Task and quest tracking boards |
| [Folder Notes](https://github.com/xpgo/obsidian-folder-note-plugin) | Notes that represent folders | Folders display as clickable notes in the file explorer |
| [Iconize](https://github.com/FlorianWoelki/obsidian-iconize) | Icons for files/folders | Visual icons on vault folders and files for easier navigation |
| [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) | Theme customization | Fine-tune the vault's visual appearance and CSS snippets |
| [New Tab Default Page](https://github.com/chrisgrieser/new-tab-default-page) | Custom default tab | Sets the Configuration dashboard as the default new tab |

## UI & Appearance

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Banners](https://github.com/noatpad/obsidian-banners) | Header banners for notes | Decorative banners on location, NPC, and quest notes |
| [Admonitions](https://plugins.javalent.com/admonitions) | Styled callout blocks | Info boxes, warnings, and tips throughout the vault |
| [Second Window](https://plugins.javalent.com/second-window) | Multi-window support | Run Obsidian across multiple monitors during sessions |
| [Force Note View Mode](https://github.com/bwydoogh/obsidian-force-view-mode-of-note) | Force preview/edit mode | Templates open in preview mode by default |

## Sync & Utilities

| Plugin | Description | Vault Usage |
|--------|-------------|-------------|
| [Git](https://github.com/Vinzent03/obsidian-git) | Git integration | Version control and backup of the vault |
| [Remotely Save](https://github.com/remotely-save/remotely-save) | Cloud sync | Sync vault across devices |
| [Various Complements](https://tadashi-aikawa.github.io/docs-obsidian-various-complements-plugin/) | Auto-completion | Enhanced auto-complete for links, tags, and frontmatter |
| [BRAT](https://github.com/TfTHacker/obsidian42-brat) | Beta plugin manager | Install and test beta versions of community plugins |
| [Actions URI](https://github.com/czottmann/obsidian-actions-uri) | URI scheme actions | Trigger vault actions via URLs |
| [Solo RPG Toolkit](https://github.com/alexkurowski/solo-toolkit) | Solo RPG tools | Tools for solo play and testing |
| [Readwise Mirror](https://github.com/jsonMartin/readwise-mirror) | Readwise integration | Sync highlights and annotations |

## Core Plugins (Enabled)

The following Obsidian built-in plugins are enabled:

- File Explorer, Global Search, Quick Switcher, Graph View
- Backlinks, Outgoing Links, Tag Pane
- Canvas, Page Preview, Daily Notes, Note Composer
- Command Palette, Editor Status Bar, Bookmarks
- Outline, Word Count, File Recovery
- Properties View, Bases
