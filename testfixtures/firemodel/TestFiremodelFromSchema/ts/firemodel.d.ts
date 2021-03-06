// DO NOT EDIT - Code generated by firemodel.

import firebase from 'firebase';

export namespace example {
  type URL = string;

  export interface IFile {
    url: URL;
    mimeType: string;
    name: string;
  }

  export interface DocumentReference<T> extends firebase.firestore.DocumentReference {
  }

  /** TODO: Add documentation to TestDirection. */
  export enum TestDirection {
    /** TODO: Add documentation to left. */
    left = "LEFT",
    /** TODO: Add documentation to right. */
    right = "RIGHT",
    /** TODO: Add documentation to up. */
    up = "UP",
    /** TODO: Add documentation to down. */
    down = "DOWN",
  }

  /** A Test is a test model. */
  export interface ITestModel {
    /** TODO: Add documentation to nested_collection. */
    nestedCollection: firebase.firestore.CollectionReference<ITestModel>;
    /** The name. */
    name: string;
    /** The age. */
    age: number;
    /** The number pi. */
    pi: number;
    /** The birth date. */
    birthdate: firebase.firestore.Timestamp;
    /** True if it is good. */
    isGood: boolean;
    /** TODO: Add documentation to data. */
    data: firebase.firestore.Blob;
    /** TODO: Add documentation to friend. */
    friend: DocumentReference<ITestModel>;
    /** TODO: Add documentation to location. */
    location: firebase.firestore.GeoPoint;
    /** TODO: Add documentation to colors. */
    colors: string[];
    /** TODO: Add documentation to directions. */
    directions: TestDirection[];
    /** TODO: Add documentation to models. */
    models: ITestModel[];
    /** TODO: Add documentation to refs. */
    refs: firebase.firestore.DocumentReference[];
    /** TODO: Add documentation to meta. */
    meta: { [key: string]: any; };
    /** TODO: Add documentation to meta_strs. */
    metaStrs: { [key: string]: string; };
    /** TODO: Add documentation to direction. */
    direction: TestDirection;
    /** TODO: Add documentation to test_file. */
    testFile: IFile;
    /** TODO: Add documentation to url. */
    url: URL;
    /** TODO: Add documentation to nested. */
    nested: ITestModel;

    /** Record creation timestamp. */
    createdAt: firebase.firestore.Timestamp;
    /** Record update timestamp. */
    updatedAt: firebase.firestore.Timestamp;
  }

  /** TODO: Add documentation to TestTimestamps. */
  export interface ITestTimestamps {

    /** Record creation timestamp. */
    createdAt: firebase.firestore.Timestamp;
    /** Record update timestamp. */
    updatedAt: firebase.firestore.Timestamp;
  }
}
