chrome.alarms.onAlarm.addListener(alarm => {
if (alarm.name == 'testAlarm') {
    chrome.notifications.create('test',{
        type: 'image',
        iconUrl: 'assets/images/logo.png',
        title: 'Death Reminder',
        message: 'You will die someday.',
        imageUrl: 'assets/images/death.png' ,
        priority: 2
    });
}
});