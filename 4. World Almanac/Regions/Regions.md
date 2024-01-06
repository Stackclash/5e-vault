---

database-plugin: basic

---

```yaml:dbfolder
name: new database
description: new description
columns:
  __file__:
    key: __file__
    id: __file__
    input: markdown
    label: File
    accessorKey: __file__
    isMetadata: true
    skipPersist: false
    isDragDisabled: false
    csvCandidate: true
    accessor: __file__
    position: 1
    isHidden: false
    sortIndex: -1
    width: 219
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      source_data: current_folder
  __created__:
    key: __created__
    id: __created__
    input: calendar_time
    label: Created
    accessorKey: __created__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    accessor: __created__
    position: 11
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      source_data: current_folder
  __modified__:
    key: __modified__
    id: __modified__
    input: calendar_time
    label: Modified
    accessorKey: __modified__
    isMetadata: true
    isDragDisabled: false
    skipPersist: false
    csvCandidate: true
    accessor: __modified__
    position: 12
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      source_data: current_folder
  Pronounced:
    input: text
    accessor: Pronounced
    key: Pronounced
    label: Pronounced
    position: 3
    skipPersist: false
    accessorKey: Pronounced
    isHidden: false
    sortIndex: -1
    width: 141
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      source_data: current_folder
  Population:
    input: number
    accessorKey: Population
    key: Population
    id: Population
    label: Population
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  government:
    input: select
    accessor: GovtType
    key: government
    label: Government
    position: 6
    skipPersist: false
    accessorKey: government
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Autocracy", value: "Autocracy", color: "hsl(301, 95%, 90%)"}
      - { label: "Bureaucracy", value: "Bureaucracy", color: "hsl(31, 95%, 90%)"}
      - { label: "Confederacy", value: "Confederacy", color: "hsl(224, 95%, 90%)"}
      - { label: "Democracy", value: "Democracy", color: "hsl(34, 95%, 90%)"}
      - { label: "Dictatorship", value: "Dictatorship", color: "hsl(86, 95%, 90%)"}
      - { label: "Feudalism", value: "Feudalism", color: "hsl(351, 95%, 90%)"}
      - { label: "Gerontocracy", value: "Gerontocracy", color: "hsl(291, 95%, 90%)"}
      - { label: "Hierarchy", value: "Hierarchy", color: "hsl(216, 95%, 90%)"}
      - { label: "Kleptocracy", value: "Kleptocracy", color: "hsl(12, 95%, 90%)"}
      - { label: "Magocracy", value: "Magocracy", color: "hsl(10, 95%, 90%)"}
      - { label: "Matriarchy or Patriarchy", value: "Matriarchy or Patriarchy", color: "hsl(23, 95%, 90%)"}
      - { label: "Meritocracy", value: "Meritocracy", color: "hsl(42, 95%, 90%)"}
      - { label: "Stratocracy", value: "Stratocracy", color: "hsl(242, 95%, 90%)"}
      - { label: "Monarchy", value: "Monarchy", color: "hsl(14, 95%, 90%)"}
      - { label: "Oligarchy", value: "Oligarchy", color: "hsl(72, 95%, 90%)"}
      - { label: "Plutocracy", value: "Plutocracy", color: "hsl(93, 95%, 90%)"}
      - { label: "Republic", value: "Republic", color: "hsl(340, 95%, 90%)"}
      - { label: "Satrapy", value: "Satrapy", color: "hsl(110, 95%, 90%)"}
      - { label: "Theocracy", value: "Theocracy", color: "hsl(174, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      source_data: current_folder
      option_source: manual
  army:
    input: select
    accessor: Defences
    key: army
    label: Army
    position: 7
    skipPersist: false
    accessorKey: army
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Formidable", value: "Formidable", color: "hsl(239, 95%, 90%)"}
      - { label: "Strong", value: "Strong", color: "hsl(293, 95%, 90%)"}
      - { label: "Average", value: "Average", color: "hsl(161, 95%, 90%)"}
      - { label: "Weak", value: "Weak", color: "hsl(274, 95%, 90%)"}
      - { label: "Patheric", value: "Patheric", color: "hsl(342, 95%, 90%)"}
      - { label: "None", value: "None", color: "hsl(217, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      source_data: current_folder
      option_source: manual
  rulers:
    input: relation
    accessorKey: rulers
    key: rulers
    id: rulers
    label: Rulers
    position: 5
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      related_note_path: 4. World Almanac/NPCs/NPCs.md
      relation_color: hsl(37,99%,42%)
  alias:
    input: text
    accessorKey: alias
    key: alias
    id: alias
    label: Alias
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  world:
    input: formula
    accessorKey: world
    key: world
    id: world
    label: World
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 307
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: true
      formula_query: "${db.dataview.pages('\"4. World Almanac/Worlds\"').where(p => p.file.name != \"Worlds\").regions}"
      formula_persist_type: text
config:
  enable_show_state: false
  group_folder_column: 
  remove_field_when_delete_column: true
  cell_size: undefined
  sticky_first_column: true
  show_metadata_created: true
  show_metadata_modified: true
  source_data: current_folder
  source_form_result: root
  show_metadata_tasks: false
  frontmatter_quote_wrap: false
  row_templates_folder: /
  current_row_template: z_Templates/1. DM Templates/1. Story World Templates/Places/Template - Settlement.md
  pagination_size: 10
  source_destination_path: /
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: top
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  font_size: 16
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
  show_metadata_tags: false
filters:
  enabled: false
  conditions:
```