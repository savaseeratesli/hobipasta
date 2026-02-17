using Microsoft.AspNetCore.Mvc;
namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]

public class ErrorController: ControllerBase
{
    [HttpGet("not-found")]
    public IActionResult NotFoundError()
    {
        return NotFound(); //404
    }

    [HttpGet("bad-request")]
    public IActionResult BadRequestError()
    {
        return BadRequest(); //400
    }

    [HttpGet("unauthorized")]
    public IActionResult UnAuthorizedError()
    {
        return Unauthorized(); //404
    }

    [HttpGet("validation-error")]
    public IActionResult ValidationError()
    {
        ModelState.AddModelError("Validation Error 1", "Validation Error Details");
        ModelState.AddModelError("Validation Error 2", "Validation Error Details");
        return ValidationProblem();

    }

    [HttpGet("server-error")]
    public IActionResult ServerError()
    {
        throw new Exception("Server Error");
    }
    
}

