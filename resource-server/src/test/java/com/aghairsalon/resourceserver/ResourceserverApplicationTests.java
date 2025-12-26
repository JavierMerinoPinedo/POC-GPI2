//
package com.aghairsalon.resourceserver;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.oauth2.jwt.JwtDecoder;

@SpringBootTest
class ResourceserverApplicationTests {

    // MOCKEAMOS el JwtDecoder para que no intente conectar al auth-server
    @MockBean
    private JwtDecoder jwtDecoder;

    @Test
    void contextLoads() {
        // El contexto cargará bien porque el JwtDecoder es un mock y no hará llamadas reales
    }

}