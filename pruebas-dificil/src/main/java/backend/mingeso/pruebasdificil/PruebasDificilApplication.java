package backend.mingeso.pruebasdificil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class PruebasDificilApplication {

	public static void main(String[] args) {
		SpringApplication.run(PruebasDificilApplication.class, args);
	}

}
