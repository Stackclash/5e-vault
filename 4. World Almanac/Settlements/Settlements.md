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
    position: 1
    isHidden: false
    sortIndex: -1
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  pronounced:
    input: text
    accessorKey: pronounced
    key: pronounced
    id: pronounced
    label: Pronounced
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
  population:
    input: text
    accessorKey: population
    key: population
    id: population
    label: Population
    position: 3
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
  terrain:
    input: text
    accessorKey: terrain
    key: terrain
    id: terrain
    label: Terrain
    position: 6
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
    accessorKey: government
    key: government
    id: government
    label: Government
    position: 7
    skipPersist: false
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
  relgions:
    input: tags
    accessorKey: relgions
    key: relgions
    id: relgions
    label: Relgions
    position: 8
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  defences:
    input: select
    accessorKey: defences
    key: defences
    id: defences
    label: Defences
    position: 9
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Exports:
    input: tags
    accessorKey: Exports
    key: Exports
    id: Exports
    label: Exports
    position: 10
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Imports:
    input: tags
    accessorKey: Imports
    key: Imports
    id: Imports
    label: Imports
    position: 11
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  region:
    input: relation
    accessorKey: region
    key: region
    id: settlements
    label: Region
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 120
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      related_note_path: 4. World Almanac/Regions/Regions.md
      relation_color: hsl(0,99%,61%)
      bidirectional_relation: true
config:
  remove_field_when_delete_column: false
  cell_size: normal
  sticky_first_column: false
  group_folder_column: 
  remove_empty_folders: false
  automatically_group_files: false
  hoist_files_with_empty_attributes: true
  show_metadata_created: false
  show_metadata_modified: false
  show_metadata_tasks: false
  show_metadata_inlinks: false
  show_metadata_outlinks: false
  show_metadata_tags: false
  source_data: current_folder
  source_form_result: 
  source_destination_path: /
  row_templates_folder: /
  current_row_template: 
  pagination_size: 10
  font_size: 16
  enable_js_formulas: false
  formula_folder_path: /
  inline_default: false
  inline_new_position: last_field
  date_format: yyyy-MM-dd
  datetime_format: "yyyy-MM-dd HH:mm:ss"
  metadata_date_format: "yyyy-MM-dd HH:mm:ss"
  enable_footer: false
  implementation: default
filters:
  enabled: false
  conditions:
```