<!DOCTYPE html>
<html lang="en">

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="bootstrap-5.3.3-dist/css/bootstrap.css" rel="stylesheet">
<script src="bootstrap-5.3.3-dist/js/bootstrap.bundle.js" defer></script>
<title>Country List</title>
</head>

<body>
    <div class="d-flex">
        <div class="p-2 flex-fill"><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div>
        <div class="p-2"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></div>
        <div class="p-2">
            <label for="years"></label>
            <select name="years" id="years" class="form-select-sm p-2" aria-label="Default select example">
                <option value="placeholder1">Place holder 1</option>
                <option value="placeholder2">Place holder 2</option>
            </select>
        </div>
    </div>
    <table class="table table-bordered table-hover">
        <thead>
            <tr>
                <th scope="col">Flag</th>
                <th scope="col">Country Name</th>
                <th scope="col">Population</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</body>

</html>