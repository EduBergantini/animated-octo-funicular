FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["NowWeTalkin.Server/NowWeTalkin.Server.csproj", "NowWeTalkin.Server/"]
RUN dotnet restore "NowWeTalkin.Server/NowWeTalkin.Server.csproj"
COPY . .
WORKDIR "/src/NowWeTalkin.Server"
RUN dotnet build "NowWeTalkin.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "NowWeTalkin.Server.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "NowWeTalkin.Server.dll"]
