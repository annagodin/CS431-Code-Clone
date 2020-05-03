# CS431-Code-Clone

Created By: Anna Godin, Racquel Jones, Matt Kelly, Dan Cherdak

Live Link: https://fir-demo-4c41a.web.app

### Project Overview
The purpose of this web application is to detect code clones. There are four categories of code clones. Type 1 clone is a direct copy without any alterations. Type 2 clones have syntactically similar segments, but variable types or literals may vary. Type 3 clones may vary by changing, added, or removing a statement. Type 4 clones will perform the same computation but have different syntax. Code clones are not necessarily nefarious, but they can increase the error checking complexity, which is an inevitable problem in software development. This web application will take either two snippet codes that the user can manually type or a project of files. The similarities between the input are detected and displayed to the user. Then the user can provide written and numerical feedback to evaluate the accuracy of the clone detection system. After the user can analyze the distribution of code clones in their project and the accuracy rate of each clone type based on the Likert scale.

### Tech Used
This application was built with Angular 9.0.5, Bootstrap 4, Firebase, and Spring Boot 2.2.6.

* **Angular + Bootstrap + Angular Material** was used for the front end implementation of the project.

* **Firebase** real-time database was used for data persistence, namely clone feedback data. 

* **Spring Boot** was used for the Java backend implementation of the code clone algorithm. The service we used was [JCCD](http://jccd.sourceforge.net/)

### Testing out the System
We have provied some test files to use when trying out the system. The files can be locates in the [test-files](test-files) directory.
