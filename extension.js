({
    name: "LCDI2C", // Category Name
    description: "Character LCD I2C",
    author: "microBlock",
    category: "Display",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#27AE60", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "lcd_setup",
        {
            xml: `
                <block type="lcd_show">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="lcd_show_at">
                    <value name="value">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                    <value name="line">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="indent">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "lcd_clear",
        {
            xml: `
                <block type="lcd_set_cursor">
                    <value name="line">
                        <shadow type="math_number">
                            <field name="NUM">1</field>
                        </shadow>
                    </value>
                    <value name="indent">
                        <shadow type="math_number">
                            <field name="NUM">0</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "lcd_backlight",
        "lcd_display",
        "lcd_cursor",
        "lcd_scroll_left",
        "lcd_scroll_right",
        "lcd_go_sleep",
        "lcd_exit_sleep"
    ]
});
