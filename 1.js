var gr = new GlideRecord('sys_properties');
gr.addQuery('name', 'glide.entry.first.page.script');
gr.query();
if (gr.next()) {
  gs.info('Record with the name glide.entry.first.page.script already exists. Skipping creation.');
} else {
  gr = new GlideRecord('sys_properties');
  gr.initialize();
  gr.name = 'glide.entry.first.page.script';
  gr.value = 'new SPEntryPage().getFirstPageURL()';
  if (gr.insert() != null)
    gs.info('Record with the name glide.entry.first.page.script and the value new SPEntryPage().getFirstPageURL() created successfully.');
}
