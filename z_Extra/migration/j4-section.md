## Transport Services
> [!info]- Travel time and transport costs
> Uses the party's Method, pace, and hours above.
>
> | | |
> | --- | --- |
> | **Miles to travel** | `INPUT[number:travel_distance]` |
> | **Travel time** | `VIEW[round({travel_distance} * {travel_calc} / 60, 1)]` hours · `VIEW[round({travel_distance} * {travel_calc} / 60 / {travel_hours_per_day}, 1)]` days |
> | **Danger level** | `INPUT[inlineSelect(option(1.5, Safe Route), option(2, Chance of Bandits), option(3, Hostile Lands), option(5, Warzone)):danger_level]` |
> | **Familiar route** | `INPUT[toggle:familiar_route]` |
> | **Party members** | `INPUT[number:party_members]` |
> | **Lifestyle** | `INPUT[inlineSelect(option(0, Wretched), option(1, Squalid), option(2, Poor), option(10, Modest), option(20, Comfortable), option(40, Wealthy), option(100, Aristocratic)):lifestyle_cost_sp]` |
> | **Include meals** | `INPUT[toggle:include_meals]` `VIEW[round(({include_meals} ? 1 : 0) * (({lifestyle_cost_sp} / 10) * {party_members}) * round({travel_distance} * {travel_calc} / 60 / {travel_hours_per_day}), 1)]` gp |
>
> | Service | Cost per mile (cp) | Total (gp) |
> | --- | --- | --- |
> | Coach (between towns) | `INPUT[number:coach_cost_per_mile]` | `VIEW[round({travel_distance} * ({coach_cost_per_mile} * ({danger_level} + ({familiar_route} ? -0.5 : 0)) * {party_members}), 0) / 100 + (({include_meals} ? 1 : 0) * (({lifestyle_cost_sp} / 10) * {party_members}) * round({travel_distance} * {travel_calc} / 60 / {travel_hours_per_day}))]` |
> | Coach (within city) | `INPUT[number:coach_cost]` | `VIEW[round(({coach_cost} * ({danger_level} + ({familiar_route} ? -0.5 : 0)) * {party_members}), 0) / 100]` |
> | Send messenger | `INPUT[number:messenger_cost_per_mile]` | `VIEW[round({travel_distance} * ({messenger_cost_per_mile} * ({danger_level} + ({familiar_route} ? -0.5 : 0))), 0) / 100]` |
> | Ship's passage | `INPUT[number:ship_cost_per_mile]` | `VIEW[round({travel_distance} * ({ship_cost_per_mile} * ({danger_level} + ({familiar_route} ? -0.5 : 0)) * {party_members}), 0) / 100 + (({include_meals} ? 1 : 0) * (({lifestyle_cost_sp} / 10) * {party_members}) * round({travel_distance} * {travel_calc} / 60 / {travel_hours_per_day}))]` |
>
> **Travelling more than 8 hours a day** requires a [[08 Using Ability Scores#Constitution Checks|Constitution check]] each hour after 8: DC 11 at hour 9, DC 12 at hour 10, and so on. Each failure adds a level of [[Conditions#Exhaustion|Exhaustion]].

