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
    position: 0
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
  Art:
    input: text
    accessorKey: Art
    key: Art
    id: Art
    label: Art
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 199
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Race:
    input: select
    accessorKey: Race
    key: Race
    id: Race
    label: Race
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Elf", value: "Elf", color: "hsl(110, 95%, 90%)"}
      - { label: "Half-Elf", value: "Half-Elf", color: "hsl(265, 95%, 90%)"}
      - { label: "Warforged", value: "Warforged", color: "hsl(71, 95%, 90%)"}
      - { label: "Human", value: "Human", color: "hsl(150, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Condition:
    input: select
    accessorKey: Condition
    key: Condition
    id: Condition
    label: Condition
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Healthy", value: "Healthy", color: "hsl(298, 95%, 90%)"}
      - { label: "Hurt", value: "Hurt", color: "hsl(23, 95%, 90%)"}
      - { label: "Dead", value: "Dead", color: "hsl(338, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  Location:
    input: text
    accessorKey: Location
    key: Location
    id: Location
    label: Location
    position: 100
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
  Class:
    input: select
    accessorKey: Class
    key: Class
    id: Class
    label: Class
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Rogue", value: "Rogue", color: "hsl(164, 95%, 90%)"}
      - { label: "Warlock", value: "Warlock", color: "hsl(98, 95%, 90%)"}
      - { label: "Cleric", value: "Cleric", color: "hsl(183, 95%, 90%)"}
      - { label: "Artificer", value: "Artificer", color: "hsl(193, 95%, 90%)"}
      - { label: "Barbarian", value: "Barbarian", color: "hsl(137, 95%, 90%)"}
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      option_source: manual
  hp:
    input: number
    accessorKey: hp
    key: hp
    id: hp
    label: hp
    position: 100
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
  ac:
    input: number
    accessorKey: ac
    key: ac
    id: ac
    label: ac
    position: 100
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
  modifier:
    input: number
    accessorKey: modifier
    key: modifier
    id: modifier
    label: modifier
    position: 100
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
  level:
    input: number
    accessorKey: level
    key: level
    id: level
    label: level
    position: 100
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
  source_data: query
  source_form_result: "FROM \"3. The Party\" WHERE contains(file.folder, \"Characters\")"
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