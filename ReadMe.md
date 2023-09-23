# Unlocking the power of the browser dev tools


## About this sample application

run `npx http-server` to start the application. Then navigate to `http://localhost:8080` in your browser.

## Console
Console output is one of the simplest ways to see the state of your application at run-time. Use the following console
functions to output data. This section outlines some of the most useful functions in the console object. For complete documentation please see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Console).

To see the console output, open the browser dev tools and select the console tab.

### console.log()
`console.log()` is the most basic console function. Data passed into this function will be output to the console.

Example:
```javascript
console.log('Hello World');
```

### console.assert()
The console.assert() method logs a message to the console if an assertion is false. 
If the assertion is true, nothing is logged to the console.

Consider the following example:
```javascript
console.assert(1 === 2, '1 does not equal 2');
```

The output in the console shows the message and the stack trace. It looks like this:
![console.assert() output](images/assertFailedOutput.png)

### console.dir()
`console.dir()` is used to output a JavaScript object to the console. This function will output the object in a tree, making it useful for nested data.

Example:
```javascript
    crab = {ageInYears:2.1, name:"monster", type:"hermit crab", 
        origin: {country:"United States", state:"New Jersey", city:"Ocean City"}};
    console.dir(crab);
```

The output from this example would look something like this:
![console.dir() output](images/consoleDir.png)


### console.table()
`console.table()` is used to output an array of objects to the console. This function will output the array as a table, making it useful for tabular data.

Example:
```javascript
    crabs = [
        {ageInYears:2.1, name:"monster", type:"hermit crab"}, 
        {ageInYears:1.5, name:"crabby", type:"hermit crab"},
        {ageInYears:1.2, name:"crabzilla", type:"hermit crab"}
    ];
    console.table(crabs);
```

The output from this example looks like this:
![console.dir() output](images/consoleTable.png)


## console.info(), console.trace(), console.warn(), console.debug(), console.error()

Consider the following example:
```javascript
console.info('This is an info message');
console.trace('This is a trace message');
console.warn('This is a warning message');
console.debug('This is a debug message');
console.error('This is an error message');
```

Running this example yeilds the following output:
![log level output](images/levelOutput.png)

### console.time() and console.timeEnd()

```javascript
console.time('timer');
setTimeout(() => {
    console.timeEnd('timer');
}, 1000);

```

The output in the console shows the name of the timer and the 
time (in milliseconds) it took to execute the code block.
![timer output](images/timerOutput.png)


## Storage
There are several ways in which data is stored in the browser. The most effective way to 
examine the state of that storage is to utilize the browsers dev tools. In this section
we'll look at a few of the most common types of storage and how to interact with the data
in the browser dev tools.
### Cookies
To view the cookies associated with a particular website, navigate to the site, open the dev tools, and select cookies in the Storage panel. You'll need to refresh the panel to see changes to the 
cookies. You can see the name, value and expiration date of each cookie. You can also manipulate cookies from this panel.

The screenshot below shows this tool in Chromium-based browsers.
![cookies](images/cookiesPanel.png)

### Local Storage
To view the local storage associated with a particular website, navigate to the site, open the dev tools, and select local storage in the Storage panel. Data placed in local storage 
will persist until it is cleared by the user or the application.

![local storage](images/localStoragePanel.png)

### Session Storage
To view the session storage associated with a particular website, navigate to the site, open the dev tools, and select session storage in the Storage panel. You will notice that 
session storage is cleared when you close the browser tab.

![session storage](images/sessionStoragePanel.png)


## Memory
The memory panel in the browser dev tools allows you to see the memory usage of your application. 

To get started, I recommend selecting the 'Heap Snapshot' option from the 
main memory screen and taking a snapshot. You can then use the 'Summary' tab to see the memory usage of your application. Once you're ready, you can 
collect a second snapshot and use the 'Comparison' option to compare snapshots.

![memory panel](images/memoryHeap.png)

See the [Chrome Dev Tools documentation](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/) for more information on the memory panel. 


## Performance 
Open the Performance panel in your browser dev tools. The browser doesn't continuously record performance data, so you'll need to click the record button to start recording, and click stop to end the recording.

If you're using the sample application, navigate to the Performance tab and click the Animate button. 
When the recording has stopped, will see a lot of information has been captured, including the following:

1. A graph of CPU activity
2. A graph of network activity 
3. Progressive screen shots showing the visual state
4. A graph of memory usage over time. 
5. A dial chart showing the percentage time spent in the scripting, rendering, painting and other categories of utilization. 
6. A call tree, also showing percentages of utilization. 
7. Event list.

This tool can be used to diagnose run-time performance issues as well as slowness associates with the first time load of a web application. For more information about how to use the tool see the [Chrome Dev Tools documentation](https://developer.chrome.com/docs/devtools/performance/). 