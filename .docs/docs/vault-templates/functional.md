# Functional Templates

Utility templates that perform operations on existing notes rather than creating new ones. Located in `z_Templates/Templater/Functional/`.

## Add Relationship

**File:** `z_Templates/Templater/Functional/Add Relationship.md`

Adds a bidirectional relationship between two NPCs. When you add a relationship (e.g., "Father") to one NPC, the inverse relationship (e.g., "Son" or "Daughter", based on gender) is automatically added to the other NPC.

Relationship types and their inverses are defined in `Configuration.md`.

## Remove Relationship

**File:** `z_Templates/Templater/Functional/Remove Relationship.md`

Removes a bidirectional relationship between two NPCs. Both sides of the relationship are cleaned up.

## Add Travel Distance

**File:** `z_Templates/Templater/Functional/Add Travel Distance.md`

Records a travel distance between two locations. This data is used by the `travelTimes.js` Dataview view to display distance and travel time tables.

## Remove Travel Distance

**File:** `z_Templates/Templater/Functional/Remove Travel Distance.md`

Removes a previously recorded travel distance between two locations.

## Startup

**File:** `z_Templates/Templater/Functional/Startup.md`

Runs on vault startup via the Templater plugin's startup template feature. Performs initialization tasks such as downloading CSS files and refreshing JSON data.
