var  policyName = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
                      builder =>
                      {
                          builder
                            .WithOrigins("http://localhost:4200")
                            .WithMethods("POST")
                            .AllowAnyHeader();
                      });
});

var app = builder.Build();

app.UseCors(policyName);

app.UseHttpsRedirection();


app.MapGet("/test", () =>
{
    return "hello";
});

app.MapPost("/upload", async (HttpRequest req) =>
{
    IFormFileCollection files = req.Form.Files;

    var responseList = new List<object>();

    foreach (var file in files)
    {
        if (file.Length > 0)
        {
            var stream = file.OpenReadStream();
            await using Stream fileStream = File.Open($@"attachments/{file.FileName}", FileMode.Create);
            await stream.CopyToAsync(fileStream);

            // Add uploaded file info to the response list.
            responseList.Add(new {
                fileName = file.FileName,
                url = $@"attachments/{file.FileName}",
                fileSize = file.Length
            });
        }
    }
     // Return response.
    return Results.Json(responseList);
});

app.Run();
