
    /* Make sure you are in Employee Experience Foundation scope */
    updateSystemProperty("sp");
    
    function updateSystemProperty(suffix) {
        var portal = new GlideRecord('sp_portal');
        portal.addQuery("url_suffix", suffix);
        portal.query();
        if (portal.next()) {
            var property = new GlideRecord('sys_properties');
            property.addQuery("name", "sn_ex_emp_fd.ex.email.redirection.portal.sysId");
            property.query();
            if (property.next()) {
                property.value = portal.getUniqueValue();;
                property.update();
            }
        }
    }
