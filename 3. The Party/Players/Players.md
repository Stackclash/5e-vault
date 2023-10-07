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
  hp:
    input: number
    accessorKey: hp
    key: hp
    id: hp
    label: HP
    position: 8
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
    label: AC
    position: 9
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
    label: Modifier
    position: 10
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
    label: Level
    position: 11
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
  stats:
    input: text
    accessorKey: stats
    key: stats
    id: stats
    label: Stats
    position: 12
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
  art:
    input: text
    accessorKey: art
    key: art
    id: Art
    label: Art
    position: 3
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
  race:
    input: select
    accessorKey: race
    key: race
    id: Race
    label: Race
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Elf", value: "Elf", color: "hsl(110, 95%, 90%)"}
      - { label: "Half-Elf", value: "Half-Elf", color: "hsl(265, 95%, 90%)"}
      - { label: "Warforged", value: "Warforged", color: "hsl(71, 95%, 90%)"}
      - { label: "Human", value: "Human", color: "hsl(150, 95%, 90%)"}
      - { label: "Elf Drow", value: "Elf Drow", color: "hsl(118, 95%, 90%)"}
      - { label: "Half Elf", value: "Half Elf", color: "hsl(244, 95%, 90%)"}
      - { label: "Warforged (ERLW)", value: "Warforged (ERLW)", color: "hsl(84, 95%, 90%)"}
      - { label: "High Elf", value: "High Elf", color: "hsl(95, 95%, 90%)"}
      - { label: "Elf High", value: "Elf High", color: "hsl(237, 95%, 90%)"}
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
  condition:
    input: select
    accessorKey: condition
    key: condition
    id: Condition
    label: Condition
    position: 5
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
      option_source: manual
  location:
    input: text
    accessorKey: location
    key: location
    id: Location
    label: Location
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 136
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  class:
    input: select
    accessorKey: class
    key: class
    id: Class
    label: Class
    position: 7
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Rogue", value: "Rogue", color: "hsl(164, 95%, 90%)"}
      - { label: "Warlock", value: "Warlock", color: "hsl(98, 95%, 90%)"}
      - { label: "Cleric", value: "Cleric", color: "hsl(183, 95%, 90%)"}
      - { label: "Artificer", value: "Artificer", color: "hsl(193, 95%, 90%)"}
      - { label: "Barbarian", value: "Barbarian", color: "hsl(137, 95%, 90%)"}
      - { label: "Artificer (TCE)", value: "Artificer (TCE)", color: "hsl(133, 95%, 90%)"}
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
  party:
    input: select
    accessorKey: party
    key: party
    id: Party
    label: Party
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 188
    options:
      - { label: "Curse of Strahd", value: "Curse of Strahd", color: "hsl(46, 95%, 90%)"}
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