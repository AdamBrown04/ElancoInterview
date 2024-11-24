<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="bootstrap-5.3.3-dist/css/bootstrap.css" rel="stylesheet">
    <link href="main.css" rel="stylesheet">
    <script src="scripts/flags.js" type="module" defer></script>
    <script src="scripts/getCitiesPopulation.js" defer>
    <title>Country Details</title>
</head>

<body>
    <div class="d-flex" id="countryDetailsTop">
        <div class="p-1"><img src="" id="flag"></div>
        <div class="p-2">
            <strong><h2><?php echo strtoupper($_GET['query'])?></strong></h2>
        </div>
        <div class="p-2"><a href="index.php"><button type="button" class="btn btn-light">Back</button></a></div>
    </div>
    <div class="p-2">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">City</th>
                    <th scope="col">Population</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"></th>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <script>
        const query = "<?php echo $_GET['query']; ?>";
        document.addEventListener('DOMContentLoaded', () => {
            import('./scripts/flags.js').then(module => {
                module.getCountryFlag(query).then(flagUrl => {
                    if (flagUrl) {
                        document.getElementById('flag').src = flagUrl;
                    } else {
                        document.getElementById('flag').alt = 'Flag not available';
                    }
                });
            });
        });
    </script>
</body>

</html>