package com.vente.voiture.ws.security.user;

import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.vente.voiture.ws.security.token.JwtTokenUtil;
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

    @GetMapping("/get-users")
    public Response GetUsers(@RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        Response response = new Response();
        try {
            Users users = jwtTokenUtil.validateTokenReturningUsers(usersService, authorizationHeader);
            response.setDataOnSuccess(users);
        } catch (Exception ex) {
            ex.printStackTrace();
            response.setError(ex.getMessage());
        }
        return response;
    }

    @GetMapping("/deconnection/{userId}")
    public Response deconnection(@PathVariable Integer userId) {
        Response response = new Response();
        try {
            Token.invalidateToken(userId);
            response.setDataOnSuccess(true);
        } catch (Exception ex) {
            ex.printStackTrace();
            response.setError(ex.getMessage());
        }
        return response;
    }

    @PostMapping
    public Users createUsers(@RequestBody Users Users) {
        return usersService.save(Users);
    }

    // @PostMapping
    // public Response createUsers(@RequestBody Users Users, @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
    //     Response response = new Response();
    //     try{
    //         jwtTokenUtil.validateToken(authorizationHeader);
    //         response.setDataOnSuccess(usersService.save(Users));
    //     }catch(Exception ex){
    //         response.setError(ex.getMessage());
    //     }
    //     return response;
    // }

    @GetMapping
    public Response getAllUsers() {
        Response response = new Response();
        try{
            response.setDataOnSuccess(usersService.getAllUsers());
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }

    @GetMapping("/{id}")
    public Response getUsersById(@PathVariable Long id) {
        Response response = new Response();
        try{
            response.setDataOnSuccess(usersService.getUsersById(id));
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }

    @PutMapping("/{id}")
    public Response updateUsers(@PathVariable Long id, @RequestBody Users UsersDetails, @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        Response response = new Response();
        try{
            jwtTokenUtil.validateToken(authorizationHeader);
            response.setDataOnSuccess(usersService.updateUsers(id, UsersDetails));
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }

    @DeleteMapping("/{id}")
    public Response deleteUsers(@PathVariable Long id, @RequestHeader(HttpHeaders.AUTHORIZATION) String authorizationHeader) {
        Response response = new Response();
        try{
            jwtTokenUtil.validateToken(authorizationHeader);
            usersService.deleteUsers(id);
            response.setDataOnSuccess("Success");
        }catch(Exception ex){
            response.setError(ex.getMessage());
        }
        return response;
    }
    
}
