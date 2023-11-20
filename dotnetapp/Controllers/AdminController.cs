using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;

namespace dotnetapp.Controllers
{

   
    [ApiController]
    [Route("/[controller]")]
    public class AdminController : ControllerBase
    {
       MovieContext context=new ApplicationDbContext();

        [HttpGet]
 
        [Route("ListTeam")]
        public IActionResult Get()
        {
            var data=from m in context.Teams select m;
            return Ok(data);
        }
 
        [HttpGet]
 
        [Route("ListTeam/{id}")]
        public IActionResult Get(int id)
        {
            // var data=context.Teams.ToList();
            if(id==null)
            {
                return BadRequest("Id cannot be null");
            }
            var data=(from m in context.Teams where m.Id==id select m).FirstOrDefault();
            // var data=context.Teams.Find(id);
            if(data==null)
            {
                return NotFound($"Movie {id} not found");
            }
            return Ok(data);
           
        }
        [HttpPost]
        [Route("AddTeam")]
        public IActionResult Post(Movie movie)
        {
            if(ModelState.IsValid)
            {
                try{
                    context.Teams.Add(movie);
                    context.SaveChanges();
 
                }
                catch(System.Exception ex){
                    return BadRequest(ex.InnerException.Message);
 
                }
            }
            return Created("Record Added",movie);
 
        }
        [HttpPut]
        [Route("EditTeam/{id}")]
        public IActionResult Put(int id,Movie movie)
        {
            if(ModelState.IsValid)
            {
                Movie mv=context.Teams.Find(id);
                mv.Name=movie.Name;
                mv.Rating=movie.Rating;
                mv.YearRelease=movie.YearRelease;
                context.SaveChanges();
                return Ok();
               
 
 
 
            }
            return BadRequest("Unable to Edit Record");
        }
        [HttpDelete]
        [Route("DeleteMovie/{id}")]
        public IActionResult Delete(int id)
        {
            // try{
                // var details=context.Details.Where(d=>d.MovieId==id);
                // if(details.Count() != 0)
                // {
                //     throw new Exception("Cannot delete movie");
                // }
                var data=context.Teams.Find(id);
                context.Teams.Remove(data);
                context.SaveChanges();
                return Ok();
            // }
            // catch(System.Exception ex)
            // {
            //     return BadRequest(ex.Message);
            // }
           
        }

        [HttpGet]
        [Route("DisplayTeams/Rating/Year")]
        public IActionResult GetDisplayTeams(int rating, int year) {
            var data = from m in context.Teams where m.Rating == rating && m.YearRelease == year select m;
            if(data.Count() == 0) {
                return NotFound($"No Teams in {rating} for the year {year}");
            }

            return Ok(data);
        }

        [HttpGet]
        [Route("DisplayByRating")]
        public IActionResult GetDisplayByRating([FromQuery] int rating) {
            var data = context.Teams.Where(m => m.Rating == rating);
            if(data.Count() == 0) {
                return NotFound($"No Movie Found");
            }

            return Ok(data);
        }
    }
}