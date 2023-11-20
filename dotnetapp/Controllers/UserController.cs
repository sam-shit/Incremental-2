using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{
    

    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
 
        [Route("ListTeam")]
        public IActionResult Get()
        {
            var data=from m in context.Teams select m;
            return Ok(data);
        }

        [HttpGet]

        piblic IActionResult Get() {

        }



        
    }
}