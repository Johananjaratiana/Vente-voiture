package com.vente.voiture.ws.security.user;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpHeaders;

import com.vente.voiture.ws.security.JwtTokenUtil;
import com.vente.voiture.ws.security.token.Token;
import com.vente.voiture.ws.structure.Response;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @CrossOrigin
    @PostMapping("/login")
    public Response login(@RequestBody Users loginRequest) throws Exception{
        Response response = new Response();
        try
        {
            Users user = Users.VerifyExistingUsers(loginRequest.getEmail(), loginRequest.getMdp());
            if (user != null) 
            {
                String token = jwtTokenUtil.generateToken(Integer.valueOf(user.getId().toString()));
                response.setDataOnSuccess(new Token(token, true));
            }
            else 
            {
                response.setError("Invalid username or password");
            }
        }catch(Exception ex){
            ex.printStackTrace();
            response.setError(ex.getMessage());
        }
        return response;
    }

    @GetMapping("/verify-token")
    public ResponseEntity<?> verifyToken(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        try {
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                String token = authorizationHeader.substring(7); // Extract the token excluding "Bearer "
                String profile = jwtTokenUtil.validateToken(token);
                if(profile == null)profile = "false";
                return ResponseEntity.ok(profile);
            } else {
                return ResponseEntity.status(401).body("Invalid or missing Bearer token");
            }
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(401).body("Error " + ex.getMessage());
        }
    }

    @GetMapping("/deconnection/{userId}")
    public ResponseEntity<?> deconnection(@PathVariable Integer userId) {
        try {
            Token.invalidateToken(userId);
            return ResponseEntity.ok(true);
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(401).body("Error " + ex.getMessage());
        }
    }

        @PostMapping
    public Users createUsers(@RequestBody Users Users) {
        return usersService.save(Users);
    }

    @GetMapping
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<Users> getUsersById(@PathVariable Long id) {
        return usersService.getUsersById(id);
    }

    @PutMapping("/{id}")
    public Users updateUsers(@PathVariable Long id, @RequestBody Users UsersDetails) {
        return usersService.updateUsers(id, UsersDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteUsers(@PathVariable Long id) {
        usersService.deleteUsers(id);
    }
    
}
