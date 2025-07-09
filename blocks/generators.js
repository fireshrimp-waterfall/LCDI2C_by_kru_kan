Blockly.Python['lcd_setup'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var code = 'lcd.setupAuto()\n';
  return code;
};

Blockly.Python['lcd_show'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `lcd.show(${value_value})\n`;
  return code;
};

Blockly.Python['lcd_show_at'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var value_line = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);
  var value_indent = Blockly.Python.valueToCode(block, 'indent', Blockly.Python.ORDER_ATOMIC);

  var code = `lcd.show(${value_value}, ${value_line}, ${value_indent})\n`;
  return code;
};

Blockly.Python['lcd_clear'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var code = 'lcd.clear()\n';
  return code;
};

Blockly.Python['lcd_backlight'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var dropdown_value = block.getFieldValue('value');

  var code = `lcd.backlight(${dropdown_value})\n`;
  return code;
};

Blockly.Python['lcd_display'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var dropdown_value = block.getFieldValue('value');

  var code = `lcd.display(${dropdown_value})\n`;
  return code;
};

Blockly.Python['lcd_go_sleep'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var code = 'lcd.backlight(False); lcd.display(False)\n';
  return code;
};

Blockly.Python['lcd_exit_sleep'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var code = 'lcd.backlight(True); lcd.display(True)\n';
  return code;
};

Blockly.Python['lcd_cursor'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var dropdown_value = block.getFieldValue('value');

  var code = `lcd.cursor(${dropdown_value})\n`;
  return code;
};

Blockly.Python['lcd_set_cursor'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var value_line = Blockly.Python.valueToCode(block, 'line', Blockly.Python.ORDER_ATOMIC);
  var value_indent = Blockly.Python.valueToCode(block, 'indent', Blockly.Python.ORDER_ATOMIC);

  var code = `lcd.setCursor(${value_line}, ${value_indent})\n`;
  return code;
};

Blockly.Python['lcd_scroll_left'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var code = 'lcd.scrollLeft()\n';
  return code;
};

Blockly.Python['lcd_scroll_right'] = function(block) {
  Blockly.Python.definitions_['import_LCDI2C_as_lcd'] = 'import LCDI2C as lcd';

  var code = 'lcd.scrollRight()\n';
  return code;
};

