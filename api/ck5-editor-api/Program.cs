var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseHttpsRedirection();


app.MapGet("/test", () =>
{
    return "hello";
});

app.MapPost("/upload", async (IFormFile file) =>
{
    var stream = file.OpenReadStream();
    await using Stream fileStream = File.Open($@"{file.FileName}", FileMode.Create);
    await stream.CopyToAsync(fileStream);
});

app.Run();
