function submitForm(){
	$.ajax({
		url : "https://json.geoiplookup.io/api",
		type: "POST",
		data : $('#myForm').serialize(),
		success: function(data, status, jqxhr)
		{
			console.log(data, status, jqxhr);
		},
		error: function (jqxhr, status, error)
		{
			console.error(jqxhr, status, error);
		}
	});
}