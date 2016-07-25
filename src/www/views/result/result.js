
    angular.module('App')
       Momsmed.controller('ResultCtrl', function ($scope, $http, $ionicLoading,Medname) {
            $ionicLoading.show();
           $scope.input=Medname;
            var med =Medname.medname;
            $http.get('https://api.fda.gov/drug/label.json' + '?api_key=0hsABDQ17AnD4oCOhV0GxLmGbvNzZ87YqqrJvsf4&search=pregnancy:' + med)
                .success(function (medinfo) {
                    $scope.numLimit=0;
                    $scope.Contraindications=function(){
                        $scope.numLimit=10000;
                    };
                    $scope.medinfo = medinfo;
                    // console.log($scope.medinfo.results[0].pregnancy[1].indexOf('Category'))
                    // console.log($scope.medinfo.results[0].nursing_mothers[0])
                    $ionicLoading.hide();




                    $scope.result =[];

                    angular.forEach(medinfo.results[0].pregnancy,  function (Category, Categories) {
                        if (medinfo.results[0].pregnancy === undefined){
                            $scope.pregnancy = "N/A";
                        }
                        for (var i = 0; i < medinfo.results[0].pregnancy.length; i++) {
                            console.log(i + " " + medinfo.results[0].pregnancy[i]);

                            //check if string array contains the string
                            if (medinfo.results[0].pregnancy[i].search("Pregnancy Category") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Category")+19;
                                console.log("found                           " + Category)

                                console.log("i, found =" + i + " " + found);
                                $scope.result=medinfo.results[0].pregnancy[i].substring(found, found+ 1);
                                break;
                            }
                            else if (medinfo.results[0].pregnancy[i].search("Pregnancy Categories") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Categories")+21;
                                $scope.result=medinfo.results[0].pregnancy[i].substring(found, found+ 56);
                                break;
                            }
                            else {
                                $scope.result= medinfo.results[0].pregnancy[i];
                            }

                        }

                        console.log($scope.result);
                        return $scope.result;
                    });
                    $scope.getStyle = function(result){
                        if($scope.result == "A" || $scope.result== "B")
                            return {'color':'blue'};
                        if($scope.result == "C")
                            return {'color':'orange'};
                        if($scope.result == "D" || $scope.result== "X")
                            return {'color':'red'};
                        else
                            return {"color": "purple"}
                    };



                    $scope.nursing_mothers = [];
                    console.log(medinfo.results[0].nursing_mothers);
                    angular.forEach(medinfo.results[0], function () {
                        if (medinfo.results[0].nursing_mothers === undefined){
                            $scope.nursing_mothers = "N/A";
                        }

                        else {
                            for (var i = 0; i < medinfo.results[0].nursing_mothers.length; i++) {
                                console.log(i + " " + medinfo.results[0].nursing_mothers[i]);

                                if (i >= 0) {

                                    $scope.nursing_mothers = medinfo.results[0].nursing_mothers[i];
                                    break;
                                }
                                else if (i < 0) {

                                    $scope.nursing_mothers = "Could not find the information...";
                                    break;
                                }
                            }

                        }


                        return $scope.nursing_mothers;});





       }).error(function (err) {
           $ionicLoading.show({
               template: 'Could not find the medication in FDA database. Please check the spelling of the medication.',
               duration: 3000
           });
          });
       });

