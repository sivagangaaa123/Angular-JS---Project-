var app = angular.module("campus360", []);

app.controller("dashboardcontroller", function ($scope) {
    $scope.collegeName = "FISAT";
    $scope.totalStudents = 1200;
    $scope.totalFaculty = 85;
    console.log("Dashbord Controller is Loaded");
    $scope.students=[
        "Shahid", "Aleena", "John", "Sreya"
    ];
    $scope.addstudent=function(){
        $scope.totalStudents++;
        $scope.showstudents=true;
        $scope.showDashboard=true;
        
        

    };
});