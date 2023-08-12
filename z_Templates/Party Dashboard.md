# **Current Party**
**[[Player Database|Edit Players]]** | **[[NPC Database|Edit NPCs]]**
> [!cards|dataview 5]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	embed(Art) AS "Art",
>	pronouns AS "Pronouns",
>	race AS "Race",
>	condition AS "Condition",
>	location AS "Location"
WHERE contains(NoteIcon, "Character") AND contains(WhichParty, "Party 1") AND !contains(Condition, "Dead")
>SORT file.name asc
>```

# **Session Log**
#### **[[Session Notes Database|New Session Log]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "SessionNote") AND contains(WhichParty, "Party 1")
>SORT file.name desc LIMIT 9
>```

# **Quests**
#### **[[Quest Database| New Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Quest") AND contains(WhichParty, "Party 1") AND contains(status, "Active")
>SORT file.name asc
>```

#### **[[Quest Database| New Side Quest]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Side") AND contains(WhichParty, "Party 1") AND contains(status, "Active")
>SORT file.name asc
>```

# **Service Requests**
#### **[[Service Request Database| New Service Request]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "ServiceRequest") AND contains(WhichParty, "Party 1") AND contains(status, "Requested") OR contains(status, "In-Progress") OR contains(status, "Pending Pick-Up")
>SORT file.name asc
>```

# **Letters**
#### **[[Letter Database|Add New Letter]]**
> [!cards|dataview 3]
>```dataview
TABLE WITHOUT ID
>	link(file.path, name) AS "Name",
>	QuickNotes AS "QuickNotes"
WHERE contains(NoteIcon, "Letter") AND contains(WhichParty, "Party 1") AND !contains(status, "PlayerRecieved")
>SORT file.name asc
>```

# **Notes**
