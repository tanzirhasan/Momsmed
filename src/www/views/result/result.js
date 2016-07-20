
    angular.module('App')
       Momsmed.controller('ResultCtrl', function ($scope, $http, $ionicLoading,Medname) {
            $ionicLoading.show();
           $scope.input=Medname;
            var med =Medname.medname;
            $http.get('https://api.fda.gov/drug/label.json' + '?api_key=0hsABDQ17AnD4oCOhV0GxLmGbvNzZ87YqqrJvsf4&search=pregnancy:' + med)
                .success(function (medinfo) {
                    $scope.medinfo = medinfo;
                    // console.log($scope.medinfo.results[0].pregnancy[1].indexOf('Category'))
                    // console.log($scope.medinfo.results[0].nursing_mothers[0])
                    $ionicLoading.hide();



                    var Category = "Pregnancy Category";
                    var Categories = "Pregnancy Categories";
                    $scope.result =[];

                    angular.forEach(medinfo.results[0].pregnancy,  function (Category, Categories) {
                        for (var i = 0; i < medinfo.results[0].pregnancy.length; i++) {
                            console.log(i + " " + medinfo.results[0].pregnancy[i]);

                            //check if string array contains the string
                            if (medinfo.results[0].pregnancy[i].search("Pregnancy Category") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Category")+19;
                                console.log("found                           " + Category)

                                console.log("i, found =" + i + " " + found);
                                $scope.result=medinfo.results[0].pregnancy[i].substring(found, found+ 2);
                                break;
                            }
                            else if (medinfo.results[0].pregnancy[i].search("Pregnancy Categories") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Categories")+21;
                                $scope.result=medinfo.results[0].pregnancy[i].substring(found, found+ 56);
                                break;
                            }

                        }

                    });

                    console.log($scope.result);
                    return $scope.result;

                    


       }).error(function (err) {
           $ionicLoading.show({
               template: 'Could not find the medication in FDA database. Please check the spelling of the medication.',
               duration: 3000
           });
          });
       });