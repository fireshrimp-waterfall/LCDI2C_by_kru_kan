Blockly.defineBlocksWithJsonArray([
{
  "type": "lcd_setup",
  "message0": "LCD setup",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "Setup LCD",
  "helpUrl": ""
},
{
  "type": "lcd_show",
  "message0": "LCD show %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "Boolean",
        "Number",
        "String"
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "show text or number on display with current curser position",
  "helpUrl": ""
},
{
  "type": "lcd_show_at",
  "message0": "LCD show %1 at Line %2 Indent %3",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": [
        "Boolean",
        "Number",
        "String"
      ]
    },
    {
      "type": "input_value",
      "name": "line",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "indent",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "show text or number on display with config position on screen",
  "helpUrl": ""
},
{
  "type": "lcd_clear",
  "message0": "LCD clear",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "clear anythings in display",
  "helpUrl": ""
},
{
  "type": "lcd_backlight",
  "message0": "LCD set backlight %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "ON",
          "True"
        ],
        [
          "OFF",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "lcd_display",
  "message0": "LCD set display %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "ON",
          "True"
        ],
        [
          "OFF",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "lcd_go_sleep",
  "message0": "LCD go sleep",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "lcd_exit_sleep",
  "message0": "LCD exit sleep",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "lcd_cursor",
  "message0": "LCD set cursor %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "Hide",
          "False"
        ],
        [
          "Show",
          "True"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "lcd_set_cursor",
  "message0": "LCD set cursor to Line %1 Indent %2",
  "args0": [
    {
      "type": "input_value",
      "name": "line",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "indent",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "set position of cursor on screen",
  "helpUrl": ""
},
{
  "type": "lcd_scroll_left",
  "message0": "LCD scroll left",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "set position of cursor on screen",
  "helpUrl": ""
},
{
  "type": "lcd_scroll_right",
  "message0": "LCD scroll right",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#27AE60",
  "tooltip": "set position of cursor on screen",
  "helpUrl": ""
}
]);
