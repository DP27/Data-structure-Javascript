var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
                  var printedPlaylist = {};
                  var listOfPlaylist = Object.keys(this.playlists);
                  var listIndex=0;
                  for (var index in this.playlists){
                  printedPlaylist[listOfPlaylist[listIndex]] = this.playlists[index].name + ' - ' + this.playlists[index].tracks.length + ' tracks';
                  listIndex+=1;
                      }
                  return printedPlaylist;
                  },

  printTracks :   function () {
                  var printedTracks = {};
                  var listOfPlaylist = Object.keys(this.tracks);
                  var listIndex=0;
                  for (var index in this.tracks){
                  printedTracks[listOfPlaylist[listIndex]] = this.tracks[index].name + ' by ' + this.tracks[index].artist + '  (' + this.tracks[index].album +')';
                  listIndex+=1;
                    }
                  return printedTracks;
                  },

  printPlaylist : function (playlistId) {
                  var printedPlaylist = {};
                  var listOfPlaylist = Object.keys(this.playlists);
                  for(var index in listOfPlaylist){
                  if(listOfPlaylist[index] === playlistId){
                  printedPlaylist[playlistId] = this.playlists[playlistId].name + ' - ' + this.playlists[playlistId].tracks.length + ' tracks';
                  for(var t in this.playlists[playlistId].tracks){
                  printedPlaylist[this.playlists[playlistId].tracks[t]] = this.tracks[this.playlists[playlistId].tracks[t]].name + ' by ' + this.tracks[this.playlists[playlistId].tracks[t]].artist + '  (' + this.tracks[this.playlists[playlistId].tracks[t]].album + ') ';
                        }
                      }
                    }
                  return printedPlaylist;
                  },

  addTrackToPlaylist : function (trackId, playlistId) {
                       if (!(trackId in this.playlists[playlistId].tracks)){
                       this.playlists[playlistId].tracks.push(trackId);
                       helper_addTrackToPlaylist(playlistId);
                          }
                      return this;
                      },

  addTrack :       function (name, artist, album) {
                  var track_name = uid();
                  this.tracks[track_name]={};
                  this.tracks[track_name]['id'] = track_name;
                  this.tracks[track_name]['name'] = name;
                  this.tracks[track_name]['artist'] = artist;
                  this.tracks[track_name]['album'] = album;
                  return this;
                  },

  addPlaylist :   function (name) {
                  var playlist_name = uid();
                  this.playlists[playlist_name]={};
                  this.playlists[playlist_name]['name'] = name;
                  return this;
                  }


              }

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks



//console.log(library.printPlaylists());

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)



//console.log(library.printTracks());

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)






console.log("printPlaylist with playlistId:    \n",library.printPlaylist('p01'));

// adds an existing track to an existing playlist




function helper_addTrackToPlaylist(playlistId){
  for (var i in library.playlists[playlistId].tracks){
    console.log("tracks in the passed playlist:",library.playlists[playlistId].tracks[i]);
    }
  }
// console.log("addTrackToPlaylist:",addTrackToPlaylist('t01','p02'));


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library



// console.log("addTrack:",addTrack('somename','someartist','somealbum'));

// adds a playlist to the library



console.log("addPlaylist:",library.addPlaylist('somename_of_playlist'));

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}


