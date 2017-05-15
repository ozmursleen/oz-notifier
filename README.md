# oz-notifier --- the notification plugin for angular apps

This plugin is gives you ability to show different notifications (info,warning,error etc) based on your needs.

## Getting Started
To get you started you can simply clone the _oz-notifier_ repository and install dependencies:

### Prerequisites

- Angular >= 1.5
- Animate.css
- Fontawesome

### Installation

```
npm install oz-notifier
```
### Usage
1. Insert html component in your main html file where everything its being routed from or loaded:
```
<oz-notifier></oz-notifier>
```

2. Set oz-notifier as a dependency in your main module:
```
angular.module('myApp', ['oz-notifier']);
```

3. Inject service to show/hide notifications:
```
AppController.$inject = ['ozNotifierService'];
function AppController(ozNotifierService) {
    var title = 'Notification Title';
    var body = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';
    ozNotifierService.show(title, body, 'info');
    ozNotifierService.show(title, body, 'success');
    ozNotifierService.show(title, body, 'warning');
    ozNotifierService.show(title, body, 'error');
    
    //add duration (miliseconds) as a 4th argument if you want to hide notification after sometime, i.e.,
    ozNotifierService.show(title, body, 'error', 3000);
}
module.exports = AppController;
```

# For full code you can visit following link:
https://github.com/ozmursleen/random-stuff/tree/master/oz-notifier

# V2 is coming soon with lots of enhancements


