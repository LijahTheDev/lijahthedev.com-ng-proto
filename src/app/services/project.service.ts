import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Project } from "../models/project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.projects = db
      .collection("projects")
      .snapshotChanges()
      .pipe(map(actions => actions.map(this.documentsWithId)));

    console.log(this.projects);
  }

  documentsWithId = _ => {
    const project = _.payload.doc.data() as Project;
    project.id = _.payload.doc.id;

    return project;
  };

  public getProjects() {
    return this.projects;
  }
}
