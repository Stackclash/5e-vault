>[!infobox]
> ```meta-bind
> INPUT[select(
> option(1, Tab 1),
> option(2, Tab 2),
> option(3, Tab 3),
> class(tabbed)
> )]
> ```
>>[!tabbed-box]
>>>[!div-m|no-t]
>>> This is Tab 1
>>
>>> [!div-m|no-t]
>>> Now you're on Tab 2
>> 
>>> [!div-m|no-t]
>>> Finally this is Tab 3

```meta-bind
INPUT[select(
option(1, Tab 1),
option(2, Tab 2),
option(3, Tab 3),
class(tabbed)
)]
```
>[!tabbed-box]
>>[!div-m|no-t]
>> This is Tab 1
>
>> [!div-m|no-t]
>> Now you're on Tab 2
> 
>> [!div-m|no-t]
>> Finally this is Tab 3
Hello, world!
Hello, world!
Hello, world!
Hello, world!

```meta-bind-button
style: primary
label: Insert Into Note
action:
  type: insertIntoNote
  line: 52
  value: "Hello, world!!!!"
  templater: false
```
Hello, world!
Hello, world!!!!
Hello, world!!!!
Hello, world!!!!
Hello, world!!!!
Hello, world!
