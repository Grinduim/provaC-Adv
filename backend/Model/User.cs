
namespace Model;
public class User
{
    public int Id {get;set;}
    public string? Name { get; set; }    
    public int Age { get; set; }    
    public string? Breed { get; set; }   
    public string? UserName { get; set; }    
    public string? Password { get; set; }    
    public string? Image { get; set; }   

    public User(){}

    public int save(){
        var id = 0;

        using(var context = new Context()){
            context.Add(this);
            context.SaveChanges();
            id = this.Id;
        }
        return id;
    }

    public int Login(){
        using(var contex = new Context()){
            var User = contex.Users.Where(u => u.UserName == this.UserName);
            if(User !=null){
                return 1;
            }
            else return -1;
        }
    }

    public  static object  FindById(int id){
        using(var context = new Context()){
            var userinfo = context.Users.Where(u=>u.Id == id).FirstOrDefault();
            if(userinfo != null){
                userinfo.Password = "";
                userinfo.UserName = "";
                userinfo.Id = 0;
                return userinfo;
            }else{
                return  null;
            }
        }
    }
}
