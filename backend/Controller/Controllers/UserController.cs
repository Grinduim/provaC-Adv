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
    
    public IConfiguration _configuration; //add

    public UserController(IConfiguration config){ //add
        _configuration = config;
    }


    [HttpPost]
    [Route("register")]
    public int RegisterClient([FromBody] User user){
        var id = user.save();
        return 1;
    }
    [HttpPost]
    [Route("login")]
    public object Login([FromBody] User user){
        var response =  user.Login();
        if(response != -1){
            return "Sucess";
        }
        else{
           return BadRequest(); 
        }
        
    }

    [HttpGet]
    [Route("get/{id}")]
    public object Login(int id){
        var teste = Model.User.FindById(id);
        if(teste != null){
            return teste;
        }else{
            return BadRequest();
        }
    }
}