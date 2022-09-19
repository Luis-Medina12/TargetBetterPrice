package com.personal.TargetBetterPrice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class TargetBetterPriceAppApplication {

	private static final Logger log = LoggerFactory.getLogger(TargetBetterPriceAppApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(TargetBetterPriceAppApplication.class, args);
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Bean
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args -> {
//			int zipCode = 85017;//aquireZIP();
//
//			String storeURI = "https://api.apilayer.com/tax_data/tax_rates?zip=85017&country=US";

//			HttpHeaders headers = new HttpHeaders();
//			headers.set("apikey", "48n1QGuhg6DP7ERxniyNs0l1L0ItasrH");
//
//			HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
//			ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
//					requestEntity,String.class);
//
//			JsonObject data = new JsonParser().parse(response.getBody()).getAsJsonObject();
//
//			double taxRate = Double.parseDouble(data.get("combined_rate").toString());
//			System.out.println(taxRate);
//			String storeURI = "https://4ba751f1-9947-47b0-b376-3fd9d1632b98.mock.pstmn.io";
//			// Actual Api works, setting to test Server for now to save server calls
//			//"https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip="+zipCode+"&radius=3";
//			HttpHeaders headers = new HttpHeaders();
//			headers.set("X-RapidAPI-Key", "Key");
//			headers.set("X-RapidAPI-Host","target-com-store-product-reviews-locations-data.p.rapidapi.com");
//
//			HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
//			ResponseEntity<String> response = restTemplate.exchange(storeURI, HttpMethod.GET,
//					requestEntity,String.class);
//
//			JsonObject data = new JsonParser().parse(response.getBody()).getAsJsonObject();
//			JsonArray jsonArray = (JsonArray) data.get("locations");
//
//			JsonObject storeLoc = (JsonObject) jsonArray.get(0);
//            JsonObject storeAddress = (JsonObject) storeLoc.get("address");
//			String zip = storeAddress.get("postal_code").toString().substring(1,6);
//			int storeId = storeLoc.get("location_id").getAsInt();
//			double storeDist = storeLoc.get("distance").getAsDouble();
//
//           System.out.println(zip + "***");
////
////            stores.add(new Store(storeLoc.get("location_id").toString(),
////                    storeLoc.get("distance").toString(),
////                    storeAddress.get("postal_code").toString().substring(1,6),
////                    storeAddress.get("address_line1").toString()));
////
//			System.exit(1);
		};
	}


	}
