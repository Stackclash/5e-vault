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
  pronounced:
    input: text
    accessorKey: pronounced
    key: pronounced
    id: pronounced
    label: Pronounced
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
  settlement_PoI:
    input: relation
    accessorKey: settlement_PoI
    key: settlement_PoI
    id: settlement_PoI
    label: Settlement Relationship
    position: 100
    skipPersist: false
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
      related_note_path: 4. World Almanac/Settlements/Settlements.md
      bidirectional_relation: true
      relation_color: hsl(0,100%,61%)
  region_PoI:
    input: relation
    accessorKey: region_PoI
    key: region_PoI
    id: region_PoI
    label: Region Relationship
    position: 100
    skipPersist: false
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
      related_note_path: 4. World Almanac/Regions/Regions.md
      bidirectional_relation: true
      relation_color: hsl(0,100%,57%)
  region_world:
    input: rollup
    accessorKey: region_world
    key: region_world
    id: region_world
    label: Region's World
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 242
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      asociated_relation_id: region_PoI
      rollup_action: Original Value
  settlement_world:
    input: rollup
    accessorKey: settlement_world
    key: settlement_world
    id: settlement_world
    label: Settlement's World
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 232
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
    width: 120
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