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
    isSorted: false
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: true
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  date:
    input: calendar
    accessorKey: date
    key: date
    id: date
    label: Session Date
    position: 3
    skipPersist: false
    isHidden: false
    sortIndex: 1
    isSorted: true
    isSortedDesc: true
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
  summary:
    input: text
    accessorKey: summary
    key: summary
    id: QuickNotes
    label: Summary
    position: 4
    skipPersist: false
    isHidden: false
    sortIndex: -1
    width: 458
    config:
      enable_media_view: true
      link_alias_enabled: true
      media_width: 100
      media_height: 100
      isInline: false
      task_hide_completed: true
      footer_type: none
      persist_changes: false
      wrap_content: true
  fc-date:
    input: text
    accessorKey: fc-date
    key: fc-date
    id: fc-date
    label: Start Date
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
  fc-end:
    input: text
    accessorKey: fc-end
    key: fc-end
    id: fc-end
    label: End Date
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
    width: 190
    options:
      - { label: "Curse of Strahd", value: "Curse of Strahd", color: "hsl(222, 95%, 90%)"}
      - { label: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]", value: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]", color: "hsl(18, 95%, 90%)"}
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
  aat-render-enabled:
    input: checkbox
    accessorKey: aat-render-enabled
    key: aat-render-enabled
    id: aat-render-enabled
    label: aat-render-enabled
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
  fc-category:
    input: text
    accessorKey: fc-category
    key: fc-category
    id: fc-category
    label: fc-category
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
  timelines:
    input: tags
    accessorKey: timelines
    key: timelines
    id: timelines
    label: timelines
    position: 100
    skipPersist: false
    isHidden: false
    sortIndex: -1
    options:
      - { label: "COS", value: "COS", color: "hsl(192, 95%, 90%)"}
      - { label: "CoS", value: "CoS", color: "hsl(228, 95%, 90%)"}
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