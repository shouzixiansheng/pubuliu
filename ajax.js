function ajax(method,url,data,success)
{
		try{
			var xhr=new XMLHttpRequest();
			}
		catch(e)
		{
			var xhr=new ActiveXObject('Microsoft.XMLHTTP');
		}
		if(method=='get'&&data)
		{
			url+='?'+data;
		}

		xhr.open(method,url,true);

		if(method=='get')
		{
			xhr.send();
		}
		else
		{
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xhr.send(data);
		}
		

		xhr.onreadystatechange=function()
		{
			if(xhr.readyState==4)
			{
				if(xhr.status==200)
				{
					success&&success(xhr.responseText);
				}
				else
				{
					alert("出错了Err:"+xhr.status);
				}
			}
		}
}