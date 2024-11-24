<!DOCTYPE html>
<html lang="en">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="bootstrap-5.3.3-dist/css/bootstrap.css" rel="stylesheet">
<script src="scripts/main.js" type="module" defer></script>
<title>Country List</title>
</head>

<body>
    <div class="d-flex">
        <div class="p-2 flex-fill"><input class="form-control mr-sm-2" type="search" placeholder="Search for countries. . ." aria-label="Search" id="search-bar"></div>
        <div class="p-2"><button class="btn btn-success my-2 my-sm-0" type="submit">Search</button></div>
    </div>
    <div class="p-2">
        <table class="table table-bordered table-hover" id="population-table">
            <thead>
                <tr>
                    <th scope="col">Flag</th>
                    <th scope="col">Country Name</th>
                    <th scope="col">Population</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
</body>

</html>