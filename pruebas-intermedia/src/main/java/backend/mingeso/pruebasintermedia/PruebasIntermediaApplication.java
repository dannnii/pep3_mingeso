package backend.mingeso.pruebasintermedia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PruebasIntermediaApplication {

	public static void main(String[] args) {
		SpringApplication.run(PruebasIntermediaApplication.class, args);
	}

}
