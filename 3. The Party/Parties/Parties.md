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
  hours_per_day:
    input: number
    accessorKey: hours_per_day
    key: hours_per_day
    id: hours_per_day
    label: Hours per Day
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 137
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  party_player:
    input: relation
    accessorKey: party_player
    key: party_player
    id: exhaustion_level
    label: Player Relationship
    position: 2
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 174
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      related_note_path: 3. The Party/Players/Players.md
      bidirectional_relation: true
      relation_color: hsl(0,96%,57%)
  party_exhaustion:
    input: rollup
    accessorKey: party_exhaustion
    key: party_exhaustion
    id: party_exhaustion
    label: Party Exhaustion
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
      asociated_relation_id: party_player
      rollup_action: Original Value
      rollup_key: exhaustion
      formula_query: 
  exhaustion_level:
    input: formula
    accessorKey: exhaustion_level
    key: exhaustion_level
    id: exhaustion_level
    label: Exhaustion
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
      persist_changes: true
      formula_persist_type: number
      formula_query: ${Math.max(...row.party_exhaustion.split(', '))}
  movement:
    input: select
    accessorKey: movement
    key: movement
    id: movement
    label: Mode of Travel
    position: 6
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Walking", value: "walking", color: "hsl(56, 95%, 90%)"}
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
  speed:
    input: select
    accessorKey: speed
    key: speed
    id: speed
    label: Travel Speed
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "Fast", value: "fast", color: "hsl(187, 95%, 90%)"}
      - { label: "Normal", value: "normal", color: "hsl(151, 95%, 90%)"}
      - { label: "Slow", value: "slow", color: "hsl(258, 95%, 90%)"}
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