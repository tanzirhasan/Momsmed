
<<<<<<< HEAD
    angular.module('App')
       Momsmed.controller('ResultCtrl', function ($scope, $http, $ionicLoading,Medname) {
            $ionicLoading.show();
            // var url = 'https://api.fda.gov/drug/label.json:'
           $scope.input=Medname;
            var med =Medname.medname;
            $http.get('https://api.fda.gov/drug/label.json' + '?search=pregnancy:' + med)
=======
    angular.module('App');
       Momsmed.controller('ResultCtrl', function ($scope, $http, $ionicLoading,Medname) {
            $ionicLoading.show();
           $scope.input=Medname;
            var med =Medname.medname;
            $http.get('https://api.fda.gov/drug/label.json' + '?api_key=0hsABDQ17AnD4oCOhV0GxLmGbvNzZ87YqqrJvsf4&search=pregnancy:' + med)
>>>>>>> a8cabbe0b1e52b06d7c5ea6fe5f694c51d1afce0
                .success(function (medinfo) {
                    $scope.medinfo = medinfo;
                    // console.log($scope.medinfo.results[0].pregnancy[1].indexOf('Category'))
                    // console.log($scope.medinfo.results[0].nursing_mothers[0])
                    $ionicLoading.hide();

<<<<<<< HEAD


=======
>>>>>>> a8cabbe0b1e52b06d7c5ea6fe5f694c51d1afce0
                    var Category = "Pregnancy Category";
                    var Categories = "Pregnancy Categories";
                    $scope.result =[];

                    angular.forEach(medinfo.results[0].pregnancy,  function (Category, Categories) {
<<<<<<< HEAD
                        for (var i = 0; i < medinfo.results[0].pregnancy.length; i++) {
                            console.log(i + " " + medinfo.results[0].pregnancy[i]);

                            //check if string array contains the string
                            if (medinfo.results[0].pregnancy[i].search("Category") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Category")+19;
                                console.log("found                           " + Category)

                                console.log("i, found =" + i + " " + found);
                                $scope.result=medinfo.results[0].pregnancy[i].substring(found, found+ 2);
=======
                        if (medinfo.results[0].pregnancy === undefined){
                            $scope.result = "N/A";
                        }
                        for (var i = 0; i < medinfo.results[0].pregnancy.length; i++) {

                            //check if string array contains the string
                            if (medinfo.results[0].pregnancy[i].search("Pregnancy Category") >= 0) {

                                //string found
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Category") + 19;


                                $scope.result = medinfo.results[0].pregnancy[i].substring(found, found + 2);
>>>>>>> a8cabbe0b1e52b06d7c5ea6fe5f694c51d1afce0
                                break;
                            }
                            else if (medinfo.results[0].pregnancy[i].search("Pregnancy Categories") >= 0) {

                                //string found
<<<<<<< HEAD
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Categories")+21;
                                $scope.result=medinfo.results[0].pregnancy[i].substring(found, found+ 56);
                                break;
                            }

                        }

                    });

                    console.log($scope.result);
                    return $scope.result;

                    

=======
                                var found = medinfo.results[0].pregnancy[i].indexOf("Pregnancy Categories") + 21;
                                $scope.result = medinfo.results[0].pregnancy[i].substring(found, found + 56);
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


                    $scope.nurseinfo=[];
                    angular.forEach(medinfo.results[0], function (){
                        if (medinfo.results[0].nursing_mothers === undefined){
                            $scope.nurseinfo = "N/A";
                        }
                        else { var idx=medinfo.results[0].nursing_mothers[0].indexOf('Nursing Mother');
                            $scope.nurseinfo= medinfo.results[0].nursing_mothers[0].substring(idx+16,700);

                        }

                    return $scope.nurseinfo;

                    });

                    $scope.druginter=[];
                    angular.forEach(medinfo.results[0].drug_interactions[0],function (interaction) {
                        var idx= medinfo.results[0].drug_interactions[0].indexOf('Drug Interactions');
                        $scope.druginter= medinfo.results[0].drug_interactions[0].substr(idx+18,5000);
                        
                    return $scope.druginter 
                    });
                    $scope.warning=[];
                    angular.forEach(medinfo.results[0].warnings[0],function (warning) {
                        if(medinfo.results[0].warnings[0]===undefined){
                            $scope.warning='not found';
                        }
                        else {
                            var idx= medinfo.results[0].warnings[0].indexOf('warnings');
                            $scope.warning= medinfo.results[0].warnings[0].substr(idx+9,5000);
                        }

                        return $scope.warning
                    });
                    $scope.contra=[];
                    angular.forEach(medinfo.results[0].contraindications[0],function (contra) {
                        var idx= medinfo.results[0].contraindications[0].indexOf('CONTRAINDICATIONS');
                        $scope.contra= medinfo.results[0].contraindications[0].substr(idx+17,5000);

                        return $scope.contra
                    });
>>>>>>> a8cabbe0b1e52b06d7c5ea6fe5f694c51d1afce0

       }).error(function (err) {
           $ionicLoading.show({
               template: 'Could not find the medication in FDA database. Please check the spelling of the medication.',
               duration: 3000
           });
          });
       });