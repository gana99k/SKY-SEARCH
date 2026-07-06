const form = document.getElementById("searchForm");
const results = document.getElementById("results");
const loading = document.getElementById("loading");

const API_KEY = "e83a7f7705b63d3f0629ba2b1760dc05";

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const departure =
        document.getElementById("departure")
        .value
        .trim()
        .toUpperCase();

    const arrival =
        document.getElementById("arrival")
        .value
        .trim()
        .toUpperCase();

    results.innerHTML = "";
    loading.textContent = "Loading flights...";

    try {

        const url =
            `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&dep_iata=${departure}&arr_iata=${arrival}`;

        const response = await fetch(url);

        const data = await response.json();

        loading.textContent = "";

        if (!data.data || data.data.length === 0) {

            results.innerHTML =
                "<p>No flights found.</p>";

            return;
        }

        data.data.forEach(flight => {

            const card =
                document.createElement("div");

            card.className = "flight-card";

            card.innerHTML = `
                <h3>
                    ${flight.airline?.name || "Unknown Airline"}
                </h3>

                <p>
                    Flight:
                    ${flight.flight?.iata || "N/A"}
                </p>

                <p>
                    Status:
                    ${flight.flight_status || "N/A"}
                </p>

                <p>
                    Departure:
                    ${flight.departure?.airport || "N/A"}
                </p>

                <p>
                    Scheduled:
                    ${flight.departure?.scheduled || "N/A"}
                </p>

                <p>
                    Arrival:
                    ${flight.arrival?.airport || "N/A"}
                </p>

                <p>
                    Scheduled:
                    ${flight.arrival?.scheduled || "N/A"}
                </p>
            `;

            results.appendChild(card);
        });

    } catch (error) {

        loading.textContent = "";

        results.innerHTML =
            "<p>Error fetching flight data.</p>";

        console.error(error);
    }
    const fromDate =
    document.getElementById("fromDate").value;

const toDate =
    document.getElementById("toDate").value;
});