using Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;

[ApiController]
[Route("user")]
public class UserController: ControllerBase
{

    [HttpPost]
    [Route("register")]
    public IActionResult RegisterClient([FromBody] User user){
        var id = user.save();
        var response = new ObjectResult(id);
        Response.Headers.Add("Access-Control-Allow-Origin", "*");
        return response;
    }
    [HttpPost]
    [Route("login")]
    public IActionResult  Login([FromBody] User user){
        var response =  user.Login();
        if(response != -1){
            var result = new ObjectResult(response);
            Response.Headers.Add("Access-Control-Allow-Origin", "*");
            return result;
        }
        else{
            return BadRequest();
        }
        
    }

    [HttpGet]
    [Route("getuser/{id}")]
    public IActionResult GetUser(int id){
        var user = Model.User.FindById(id);
        Console.WriteLine(user);
        var response = new ObjectResult(user);
        Response.Headers.Add("Access-Control-Allow-Origin", "*");
        return response;
    }
}