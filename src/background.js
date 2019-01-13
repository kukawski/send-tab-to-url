browser.pageAction.onClicked.addListener(async (tab) => {
    console.log('page action clicked on tab', tab);
    // browser.tabs.update(tab.id, {
    //     url: 
    // });
});
