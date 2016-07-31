			$(document).ready(function() {
				console.log("ready!");
				
				$('#cb1').change(function() {
					$("#v1").toggle();
					clearSelection(array[0]);
				});
				
				$('#cb2').change(function() {
					$("#v2").toggle();
					clearSelection(array[1]);
				});

				$('#cb3').change(function() {
					$("#v3").toggle();
					clearSelection(array[2]);
				});
				
				$('#cb4').change(function() {
					$("#v4").toggle();
					clearSelection(array[3]);
				});
				
			});
			
			var array = ["#cb1", "#cb2", "#cb3", "#cb4"];
			var cArray = ["#v1", "#v2", "#v3", "#v4"];
			
			function clearSelection(p) {
				if ($(p).is(':checked')) {
					for (i = 0; i < array.length; i++) {
						if (array[i] != p) {
							if ($(array[i]).is(':checked')) {
								$(array[i]).prop("checked", false);
								$(cArray[i]).toggle();
							}
						}	
					}
				}
			}
			/*
			 // Load the Visualization API and the piechart package.
			 google.charts.load('current', {'packages':['corechart']});

			 // Set a callback to run when the Google Visualization API is loaded.
			 google.charts.setOnLoadCallback(initialize);

			 function drawChart() {
			 var jsonData = $.ajax({
			 url: "",
			 dataType: "json",
			 async: false
			 }).responseText;

			 // Create our data table out of JSON data loaded from server.
			 var data = new google.visualization.DataTable(jsonData);
			 console.log(data);
			 // Instantiate and draw our chart, passing in some options.
			 var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
			 chart.draw(data, {width: 400, height: 240});
			 }

			 function initialize() {
			 var opts = {sendMethod: 'auto'};
			 var query = new google.visualization.Query(

			 'https://docs.google.com/spreadsheets/d/1e4cHRo96Q-1P1hSzkljSBeh4jKVUyCeGJkPI_2_Bd3U/edit#gid=678712218' + opts);
			 query.send(handleQueryResponse);
			 }

			 function handleQueryResponse(response) {

			 if (response.isError()) {
			 alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			 return;
			 }
			 var data = response.getDataTable();
			 console.log(data);
			 var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
			 chart.draw(data, { height: 400 });
			 }*/
